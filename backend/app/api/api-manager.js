const love = require('./love');
const urbandict = require('./urbandict');

const apiManager = (message, callback) => {
    console.log(message);
    let msg = message.content;
    let author = message.author;
    if(msg.startsWith("?"))
    {
        msg = msg.slice(1);
        let splitted = msg.split(" ");
        switch(splitted[0]) {
            case 'help':
                callback('Commands: <br>?love [name] - Zu wie viel Prozent passt du zu deiner Liebe <br>?urban [term] - Zeigt dir die Definition eines Worts')
                break;
            case 'love':
                love.getLove(author, splitted[1], (percentage) => {
                    if(percentage != undefined)
                        callback(`${author} deine Chancen ${splitted[1]} zu bekommen liegen bei ${percentage}%`);
                    else
                        callback(`${author} es gab einen Fehler beim Aufruf der Love-API! - Probiers bald nochmal!`);
                });
                
                break;
            case 'urban':
                urbandict.getDefinition(splitted[1], (definition) => {
                    if(definition != undefined)
                        callback(`${splitted[1]}: ${definition}`);
                    else
                        callback(`Für ${splitted[1]} finde ich nichts :(`);
                });
                break;
            
        }
    }
}


module.exports = {apiManager};