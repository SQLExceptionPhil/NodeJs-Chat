const request = require('request');
const url = "http://localhost:3000/api/groups/";

const getGroups = (callback) => {
   
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

const addGroup = (name, callback) => {
    request.post(url, {
        json: {
            name
        }
    }, (error, res, body) => {
        if(error) {
            callback(error);
            return;
        }
        callback(undefined, body);
    })
}

module.exports = {
    getGroups,
    addGroup
};