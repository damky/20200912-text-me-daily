require('dotenv').config();

module.exports = {
  "secret": process.env.JWT_SECRET,
  "emailSecret": process.env.JWT_EMAIL_SECRET,
  "refreshTokenSecret": process.env.JWT_REFRESH_SECRET,
  "port": 3001,
  "domain": 'http://localhost:3000/',
  "tokenLife": 60 * 10,
  "refreshTokenLife": 60 * 60,
  "email": {
    "host": "mail.postale.io",
    "port": 465,
    "user": "info@dougmckay.dev",
    "pass": process.env.EMAIL_PASS,
    "from": `"Doug McKay" <info@dougmckay.dev>`,
    "subject": "TextMe Daily - validate your email",
    "text": "Please validate your email by clicking the link. If clicking the link doesn't work, copy the url into a web browser.\n\n",
    "html": (verifyUrl) => `<body style="background:linear-gradient(#68b2DC, #4892BB); font-family: sans-serif; color:#053E5F; box-sizing:border-box;"><table width="600" style="margin: 0 auto" ><tbody><tr><td style="color: #053E5F; background: linear-gradient(#F6E8D3, #FFF9F1); padding: 30px 24px; margin: 30px auto; max-width: 600px;" width="100%" ><h1>Text Me Daily</h1><h2>Verify Your Email</h2><p>Please validate your email by clicking the link. If the link doesn't work, copy the url below into a web browser.</p><br/><a style="display:inline-block; color:#F6E8D3; padding: 20px 30px; margin: 20px auto; color: #F6E8D3; background-color: transparent; border: 5px solid transparent; font-size: 18px; font-family: 'Quicksand'; transition: all .25s cubic-bezier(0.445, 0.05, 0.55, 0.95); padding: 20px 30px; margin: 20px auto; background-color: #FFE4B0; border: 5px solid #F6E8D3; color: #053E5F;" href=\"${verifyUrl}\">verify email</a><p>- Text Me Daily</p></td></tr></tbody></table></body>`,
  }
}