const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    content: {type: String, require: true}, 
    author: {type: String, require: true},
    channel: {type: String, require: true},
    time: {type: Date, require: true}
});

module.exports = mongoose.model("Message", messageSchema);