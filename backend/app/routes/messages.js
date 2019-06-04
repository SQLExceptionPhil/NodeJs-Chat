const express = require('express');
const router = express.Router();

const Message = require('../models/message');
const {apiManager} = require('../api/api-manager');

const messages = [];

Message.find({}, (err, message) => {
    messages.push(...message);
});

router.get('', (req, res, next) => {
    let now = new Date();
    let pos = [...messages].map(e => e._id + "").indexOf(req.query.id + "") + 1
    if(pos === -1)
        pos = 0;
    let result = [...messages].splice(pos);
    res.json(result);
});

router.post('', (req, res, next) => {
    const message = new Message({
        content: req.body.content,
        author: req.body.author,
        channel: req.body.channel,
        time: new Date()
    });
    message.save().then(result => {
        messages.push(result);
        apiManager(result, (resultContent) => {
            console.log(resultContent)
            const apiMessage = new Message({
                content: resultContent,
                author: 'System',
                channel: req.body.channel,
                time: new Date()
            });
            apiMessage.save().then(result => messages.push(result));
        });
        res.status(200).json({
            message: "Message sent successfully",
            sendMsg: {
                ...result._doc
            }
        });
    });
});

module.exports = router;