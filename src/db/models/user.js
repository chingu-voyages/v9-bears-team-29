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

const User = mongoose.model('User', UserSchema);
module.exports = User;