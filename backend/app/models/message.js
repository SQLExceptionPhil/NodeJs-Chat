const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    //TODO: Think about a message schema
});

module.exports = mongoose.model("Message", messageSchema);