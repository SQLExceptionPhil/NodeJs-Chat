const request = require('request');

const getGroups = (callback) => {
    const url = "http://localhost:3000/api/groups/";
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to service.');
            return;
        }
        let groups = []
        body.forEach(group => {
            groups.push({
                id: group._id,
                name: group.name
            });
        });
        callback(undefined, groups);
    });
};

module.exports = {getGroups};