const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().regex(/^[A-Za-z]+$/).min(3).max(20).required()
});
