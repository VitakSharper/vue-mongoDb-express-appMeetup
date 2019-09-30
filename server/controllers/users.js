const User = require('../models/users');
const passport = require('passport');

exports.getUsers = (req, res) => {
    User.find({})
        .exec((errors, users) => {

            if (errors) {
                return res.status(422).send({errors});
            }

            return res.json(users);
        });
};

exports.register = (req, res) => {

    const {email, password, passwordConfirm} = req.body;

    if (!email) {
        return res.status(422).json({
            errors: {
                email: 'is required'
            }
        })
    }

    if (!password) {
        return res.status(422).json({
            errors: {
                password: 'is required'
            }
        })
    }

    if (password !== passwordConfirm) {
        return res.status(422).json({
            errors: {
                password: 'is not the same as confirmation password'
            }
        })
    }

    const user = new User(registerData);

    return user.save((err, savedUser) => {
        if (err) {
            return res.status(422).json({err});
        }
        return res.json(savedUser);
    });
};

exports.login = (req, res) => {

    const {email, password} = req.body;

    if (!email) {
        return res.status(422).json({
            errors: {
                email: 'is required'
            }
        })
    }

    if (!password) {
        return res.status(422).json({
            errors: {
                password: 'is required'
            }
        })
    }

    return password.authenticate('local', (err, passportUser) => {

    });
};
