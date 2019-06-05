const request = require('request');

const getMessages = (group, callback) => {
    const url = `http://localhost:3000/api/messages?group=${group}`;
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to service');
            return;
        }
        
        let messages = [];
        body.forEach(message => {
            messages.push({
                author: message.author,
                content: message.content,
                time: message.time,
                group: message.channel
            });
        });

        callback(undefined, messages);
    });
};

const sendMessage = ({content, author, channel}, callback) => {
    const url = 'http://localhost:3000/api/messages';
    request.post(url, {
        json: {
            content, author, channel
        }
    }, (error, res, body) => {
        if(error) {
            callback(error);
            return;
        }
        callback(undefined, body);
    });
}

module.exports = {
    getMessages,
    sendMessage
};