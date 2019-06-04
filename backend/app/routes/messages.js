const express = require('express');
const router = express.Router();

const Message = require('../models/message');

//TODO: define routes
const messages = [];

router.get('', (req, res, next) => {
    let now = new Date();
    let time_string = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;
    
    res.json(JSON.stringify({id: '1234', content: 'Hallo Welt!', author: "Philipp", time: time_string}));
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
        res.status(200).json({
            message: "Message sent successfully",
            sendMsg: {
                ...result._doc
            }
        });
    });
});

module.exports = router;