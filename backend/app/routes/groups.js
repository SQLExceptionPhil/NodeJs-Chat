const express = require('express');
const router = express.Router();

const htmlspecialchars = require('htmlspecialchars');

const Group = require('../models/group');

const groups = [];

Group.find({}, (err, group) => {
    groups.push(...group);
});

router.get('', (req, res, next) => {
    res.status(200).json(groups);
});

router.post('', (req, res, next) => {
    const group = new Group({
        name: htmlspecialchars(req.body.name)
    });
    group.save().then(result => {
        groups.push(result);
        res.status(200).json({
            message: 'Group added successfully',
            group: result
        });
    });
});

module.exports = router;