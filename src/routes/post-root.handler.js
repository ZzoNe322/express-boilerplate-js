const Joi = require('joi');
const model = require('../validation/models/post.joi');

function postRoot(req, res) {
    const result = Joi.validate(req.body, model);
    if (result.error) {
        res.status(400).send(result.error);
        return;
    }
    res.status(200).send(`Hello, ${req.body.name}!`);
}

module.exports = postRoot;
