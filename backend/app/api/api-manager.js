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
        let word = splitted.splice(1).join(" ");
        switch(splitted[0]) {
            
            case 'love':
                love.getLove(author, word, (percentage) => {
                    if(percentage != undefined)
                        callback(`${author} deine Chancen ${word} zu bekommen liegen bei ${percentage}%`);
                    else
                        callback(`${author} es gab einen Fehler beim Aufruf der Love-API! - Probiers bald nochmal!`);
                });
                
                break;
            case 'urban':
                
                urbandict.getDefinition(word, (definition) => {
                    if(definition != undefined)
                        callback(`${word}: ${definition}`);
                    else
                        callback(`Für ${word} finde ich nichts :(`);
                });
                break;
            default:
            case 'help':
                    callback('Commands: <br>?love [name] - Zu wie viel Prozent passt du zu deiner Liebe <br>?urban [term] - Zeigt dir die Definition eines Worts')
                    break;
        }
    }
}


module.exports = {apiManager};