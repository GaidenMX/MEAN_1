// services.js
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../../Config/config');

function createToken(user){
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN);
      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        });
      }
      resolve(payload.sub);
    } catch (err) {
      reject({
        status: 500,
        message: 'Invalid Token'
      });
    }
  });
  return decoded;
}

module.exports = {
  createToken,
  decodeToken
}