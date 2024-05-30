const Mongoose = require('mongoose');

const MessageSchema = new Mongoose.Schema({
    for: {type: String},
    from: {type: String},
    type: {type: String},
    content: {type: String},
    data: {type: String},
    time: {type: String},
}, { versionKey: false });
// timestamps: true, 
const MessageModel = Mongoose.model('messages',MessageSchema);

module.exports = MessageModel;