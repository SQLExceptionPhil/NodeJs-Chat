const express = require('express');
const router = express.Router();

const Message = require('../routes/messages');

//TODO: define routes

router.get('', (req, res, next) => {
    let now = new Date();
    let time_string = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;
    res.json(JSON.stringify({id: '1234', content: 'Hallo Welt!', author: "Philipp", time: time_string}));
});

module.exports = router;