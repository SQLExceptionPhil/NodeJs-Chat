const unirest = require('unirest');

const trumpQuote = (callback) => {
    unirest.get("https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote")
    .header("X-RapidAPI-Host", "matchilling-tronald-dump-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "fa4cf5d918msh1a97e3959aee7a0p181e58jsn81f9903174d8")
    .end(result => {
        callback(result.body.value);
    });
}

module.exports = {trumpQuote};