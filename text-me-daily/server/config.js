require('dotenv').config();

module.exports = {
  "secret": process.env.JWT_SECRET,
  "refreshTokenSecret": process.env.JWT_REFRESH_SECRET,
  "port": 3001,
  "tokenLife": 60 * 15,
  "refreshTokenLife": 60 * 60,
}