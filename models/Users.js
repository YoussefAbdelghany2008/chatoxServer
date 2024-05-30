const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },
    avatar: {
        type: String,
    },
}, { versionKey: false });

const UserModel = Mongoose.model('users',UserSchema);

module.exports = UserModel;