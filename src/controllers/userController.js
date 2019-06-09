const mongoose = require("mongoose");
const User = require("../db/models/user");

module.exports = {
    create(req, res, next){
        const user = req.body.user;

        const newUser = new User(user);

        newUser.save(function(err) {
            if (err) {
                res.send({ response: err })
            } else {
                res.send({ response: newUser })
            }
        });

    },
    signIn(req, res, next){
        const params = req.body.user;

        User.findOne({ email: params.email}, function(err, user) {
            if(err){
                res.send({ response: err })
            } else {
                user.comparePassword(params.password, function(err, isMatch) {
                    if (err) {
                        res.send({ response: err })
                    } else {
                        console.log(isMatch);
                        res.send({ response: user })
                    }
                });
            }
        })
    },
}