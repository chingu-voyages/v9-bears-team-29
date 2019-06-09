const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            max: 100,
            min: 1
        },
        email: {
            type: String,
            required: true,
            min: 3,
            index: { unique: true}
        },
        password: {
            type: String,
            required: true,
            min: 6
        }
    }
)

UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) return next();

    var salt = bcrypt.genSaltSync();
    bcrypt.hashSync(user.password, salt, function(err, hash) {
        if(err) return next(err);

        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function(userPassword, callback) {
    bcrypt.compare(userPassword, this.password, function(err, isMatch) {
        if (err) return callback(err);

        callback(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);