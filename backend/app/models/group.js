const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    name: {type: String, require: true}
});

module.exports = mongoose.model("Group", groupSchema);