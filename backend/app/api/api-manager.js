const love = require('./love');
const urbandict = require('./urbandict');
const trump = require('./trump');
const norris = require('./norris');

const apiManager = (message, callback) => {
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
            case 'trump':
                trump.trumpQuote(quote => callback(quote));
                break;
            case 'norris':
                norris.getJoke(joke => callback(joke));
                break;
            default:
            case 'help':
                    callback('Commands: <br>?love [name] - Zu wie viel Prozent passt du zu deiner Liebe <br>?urban [term] - Zeigt dir die Definition eines Worts<br>?norris - Zeigt dir einen "lustigen" Chuck Norris Witz<br>?trump - Zeigt dir ein Donald Trump Zitat')
                    break;
        }
    }
}


module.exports = {apiManager};