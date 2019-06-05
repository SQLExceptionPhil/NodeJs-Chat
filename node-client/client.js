const yargs = require('yargs');

const groups = require('./utils/groups');
const messages = require('./utils/messages');

const groupOption = {
    describe: 'Id of the group',
    demand: true,
    alias: 'g'
};

var argv = yargs
.command('send', 'Send a message to a group', {
    group: groupOption,
    content: {
        describe: 'Message content you want to send',
        demand: true,
        alias: 'c'
    },
    author: {
        describe: 'Your name',
        demand: true,
        alias: 'a'
    }
})
.command('listMessages', 'List all messages in a group', {
    group: groupOption
})
.command('listGroups', 'List all Group names with id').argv;

let group = argv.group;
let content = argv.content;
let author = argv.author;

switch(argv._[0]) {
    case 'send':
        messages.sendMessage({content, author, channel: group}, (err, body) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(body);
        });
        break;
    case 'listMessages':
        messages.getMessages(group, (err, messages) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(messages);
        });
        break;
    case 'listGroups':
        groups.getGroups((err, groups) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(groups);
        });
        break;
}