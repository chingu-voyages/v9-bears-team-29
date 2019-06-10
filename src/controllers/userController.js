const mongoose = require("mongoose");
const User = require("../db/models/user");
const bcrypt = require('bcryptjs');

module.exports = {
    create(req, res, next){
        const user = req.body.user;

        let password = user.password;

        let salt = bcrypt.genSaltSync();
        let passHashed = bcrypt.hashSync(password, salt);

        const userHash = {
            name: user.name,
            email: user.email,
            password: passHashed
        }

        const newUser = new User(userHash);

        newUser.save(function(err) {
            if (err) {
                res.send({ response: err })
            } else {
                res.send({ response: newUser })
            }
        });

    },
    login(req, res, next){
        const params = req.body.params;

        User.findOne({ email: params.email}, function(err, user) {
            if(user){
                console.log("USER " + user);
                res.send({ response: user })
            } else {
                res.send({ response: err })
            }
        })
    },
}