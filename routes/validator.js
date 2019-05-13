const Joi = require('joi');

module.exports = {
  registration: {
    body: {
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }
  }
}
