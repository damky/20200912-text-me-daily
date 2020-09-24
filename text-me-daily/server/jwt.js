const crypto = require('crypto');

const jwtSecret = () => {
  const bits = crypto.randomBytes(16).toString('hex');
}