require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const config = require('./config');
const email = require('./email');

const app = express();
const port = config.port;
const jwtSecret = config.secret;
const jwtEmailSecret = config.emailSecret;
const jwtRefreshSecret = config.refreshTokenSecret;
const tokenList = {};

const uri = process.env.DB_URI;

//Middleware

// JSON Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Middleware
app.use(function (req, res, next) {
  // Allow Origins
  res.header("Access-Control-Allow-Origin", "*");
  // Allow Methods
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  // Allow Headers
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization");
  // Handle preflight, it must return 200
  if (req.method === "OPTIONS") {
    // stop the Middleware chain
    return res.status(200).end();
  }
  // Next Middleware
  next();
});

// Auth Middleware
app.use((req, res, next) => {
  // login does not require jwt verification
  if (req.path === '/api/login') {
    // next middleware
    return next();
  }
  if (req.path === '/api/createuser') {
    // next middleware
    return next();
  }
  if (req.path === '/api/token') {
    // console.log(jwt.verify(req.body.refreshToken, config.refreshTokenSecret));
    try {
      jwt.verify(req.body.refreshToken, config.refreshTokenSecret)
      // console.log('decoded refresh', decoded);
    } catch (err) {
      // console.log(err);
      // catch the jwt expired or invalid errs
      return res.status(401).json({ ok: false, msg: 'expired or invalid, log in again' });
    }
    // next middleware
    return next();
  }
  if (req.path === '/api/verify') {
    // console.log(jwt.verify(req.body.refreshToken, config.refreshTokenSecret));
    try {
      jwt.verify(req.body.refreshToken, config.refreshTokenSecret)
      // console.log('decoded refresh', decoded);
    } catch (err) {
      // console.log(err);
      // catch the jwt expired or invalid errs
      return res.status(401).json({ ok: false, msg: 'expired or invalid, log in again' });
    }
    // next middleware
    return next();
  }

  // get token from request header Authorization
  const token = req.headers.authorization;

  // Token verification
  // console.log(token);
  // console.log(jwt.verify(token));
  try {
    jwt.verify(token, config.secret);
    // console.log('decoded', decoded);
  } catch (err) {
    // console.log(err);
    // catch the jwt expired or invalid errs
    return res.status(401).json({ ok: false, msg: 'expired or invalid' });
  }

  // next Middleware
  next();
});


function hashPassword(password) {
  // returns salt and hash of password for a user 
  // creates a salt unique for every user 
  // then it hashes the salt with user password and creates a hash 
  // store this in the database as user password
  const salt = crypto.randomBytes(16).toString('hex');
  // hashing user salt and pass with 1000 iterations, 64 length and sha512 digest
  const hash = crypto.pbkdf2Sync(password, salt, 1050, 64, `sha512`).toString(`hex`);
  return { salt: salt, hash: hash };
}
function validPassword(password, salt, hash1) {
  // check the entered password is correct or not 
  // takes the user password from the request  
  // and salt from user database entry 
  // It then hashes user password and salt 
  // then checks if this generated hash is equal 
  // to user's hash in the database or not 
  // If the user's hash is equal to generated hash  
  // then the password is correct otherwise not 
  const hash2 = crypto.pbkdf2Sync(password, salt, 1050, 64, `sha512`).toString(`hex`);
  return hash1 === hash2;
}

// Routes
// create user
app.post("/api/createuser", (req, res) => {
  // open connection to mongodb
  const { salt, hash } = hashPassword(req.body.password);
  const mClient = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    mClient.connect(err => {
      // if (err) {
      //   // console.error(err);
      //   // return res.status(401).json({ ok: false, msg: err });
      //   // throw Error('an account already exists with this email')
      // }
      mClient.db("TextMeDaily")
        .collection('users')
        .find({ email: { $eq: req.body.email } })
        .count()
        .then((r) => {
          if (r && r > 0) {
            console.log(r);
            return res.status(403).json({ msg: 'email already exists' })
          } else {
            mClient.db("TextMeDaily")
              .collection('users')
              .insertOne({ email: req.body.email, salt: salt, hash: hash, verified: false })
              .then(r => {
                // close connection
                mClient.close();

                // generate a token
                const token = jwt.sign({ data: req.body.email }, jwtEmailSecret, { expiresIn: config.tokenLife });
                // generate refresh token
                const refreshToken = jwt.sign({ data: req.body.email }, jwtRefreshSecret, { expiresIn: config.refreshTokenLife });

                // send email
                const verifyUrl = `${config.domain}verify?token=${encodeURI(token)}&refreshToken=${encodeURI(refreshToken)}`;
                email({
                  from: config.email.from,
                  to: req.body.email,
                  subject: config.email.subject,
                  text: config.email.text + verifyUrl,
                  html: config.email.html(verifyUrl)
                }).catch(console.error);

                // the return response
                const response = { ok: true, status: "in", token: token, refreshToken: refreshToken, email: req.body.email };
                // store it in server list
                tokenList[refreshToken] = response;

                return res.status(200).json({ ok: true });
              })
          }
        });
    });
  } catch (err) {
    return res.status(401).json({ ok: false, msg: 'An error occured' })
  }


});

app.post("/api/sendverifyemail", (req, res) => {
  // send new verify email
  console.log(tokenList[req.body.refreshToken].email);
  // get refresh token
  if ((req.body.refreshToken) && (req.body.refreshToken in tokenList)) {
    const user = tokenList[req.body.refreshToken].email;
    const token = jwt.sign({ data: user }, jwtEmailSecret, { expiresIn: config.tokenLife });
    const response = { "token": token };
    // update token in server list
    tokenList[req.body.refreshToken].token = token;

    // create url for verification
    // TODO: change verify url
    const verifyUrl = `${config.domain}verify?token=${encodeURI(token)}&refreshToken=${encodeURI(req.body.refreshToken)}`;
    email({
      from: config.email.from,
      to: user,
      subject: config.email.subject,
      text: config.email.text + verifyUrl,
      html: config.email.html(verifyUrl)
    }).catch(console.error);

    res.status(200).json(response);
  } else {
    res.status(404).json('invalid request');
  }
});

app.post("/api/verify", (req, res) => {
  // check token
  const refreshToken = req.body.refreshToken;
  console.log('in list', (refreshToken in tokenList));
  const mClient = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    if ((refreshToken) && (refreshToken in tokenList)) {
      console.log('made it?');
      jwt.verify(req.body.token, jwtEmailSecret);
      const user = tokenList[refreshToken].email;
      mClient.connect(err => {
        mClient.db("TextMeDaily")
          .collection('users')
          .updateOne(
            { email: { $eq: user } },
            { $set: { verified: true } }, { upsert: true });
      });
      mClient.close();
      // new token
      const token = jwt.sign({ data: user }, jwtSecret, { expiresIn: config.tokenLife });
      // the return response
      const response = { ok: true, status: "in", token: token, refreshToken: refreshToken, email: user };
      // store it in server list
      tokenList[refreshToken] = response;
      res.status(200).json(response);
    } else {
      throw Error('no refresh token');
    }
  } catch (err) {
    console.error(err);
    res.status(404).json({ ok: false, msg: 'invalid request' })
  }
});

app.post("/api/login", (req, res) => {
  // open connection to mongodb
  const mClient = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    mClient.connect(async err => {
      if (err) console.error(err);
      const cursor = await mClient.db("TextMeDaily")
        .collection('users')
        .findOne({ email: req.body.email });
      // cursor.then(res => console.log(res.email))
      if (cursor !== null && cursor.email === req.body.email) {
        // validate password
        const isValid = validPassword(req.body.password, cursor.salt, cursor.hash);
        // check if valid and email was validated
        if (isValid) {
          // generate a token
          const token = jwt.sign({ data: req.body.email }, jwtSecret, { expiresIn: config.tokenLife });
          // generate refresh token
          const refreshToken = jwt.sign({ data: req.body.email }, jwtRefreshSecret, { expiresIn: config.refreshTokenLife });
          // the return response
          const response = { ok: true, status: "in", token: token, refreshToken: refreshToken, email: req.body.email, apiPort: port };
          // store it in server list
          tokenList[refreshToken] = response;

          // return it back
          // but if not verified yet
          if (!cursor.verified) {
            res.status(200).json({ ...response, status: "verify" })
          } else {
            res.status(200).json(response);
          }
          console.log(`----------\n ${'it worked?'} \n----------`);
        } else {
          res.status(401).json('couldnt find email or password')
        }
      } else {
        res.status(401).json('error occured')
      }
    });
  } catch (err) {
    console.error(err);
    res.status(401).json('Incorrect email or password');
  }
  // close connection
  mClient.close();
});

app.post("/api/token", (req, res) => {
  if ((req.body.refreshToken) && (req.body.refreshToken in tokenList)) {
    const user = req.body.user;
    // console.log(user, tokenList);
    const token = jwt.sign({ data: user }, jwtSecret, { expiresIn: config.tokenLife });
    const response = { "token": token };
    // update token in server list
    tokenList[req.body.refreshToken].token = token;
    res.status(200).json(response);
  } else {
    res.status(404).send('invalid request');
  }
});

app.get("/api/ping", (req, res) => {
  //random endpoint so that the client can call something
  res.json({ "msg": "pong" });
});

app.get("/api/user", (req, res) => {
  // open connection to mongodb
  const mClient = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    mClient.connect(async err => {
      let cursor = await mClient.db("TextMeDaily")
        .collection('users')
        .findOne({ email: jwt.verify(req.headers.authorization, jwtSecret).data });
      const response = {
        email: cursor.email,
        phone: cursor.phone,
        subscriptions: cursor.subscriptions
      };
      res.status(200).json(response);
    })
  } catch (error) {
    console.error(error);
    res.status(404).send('invalid request');
  }
  mClient.close();
});

app.get("/api/subscriptions", (req, res) => {
  // open connection to mongodb
  const mClient = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    mClient.connect(async err => {
      let cursor = await mClient.db("TextMeDaily")
        .collection('feeds')
        .findOne({});
      const response = { feeds: cursor }
      res.status(200).json(response);
    })
  } catch (error) {
    console.error(error);
    res.status(404).send('invalid request');
  }
  mClient.close();
});


// start the express server
app.listen(config.port, () => {
  console.log(`server started on http://localhost:${port}`);
});

