const unirest = require('unirest');

const getJoke = (callback) => {
    unirest.get("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random")
    .header("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "fa4cf5d918msh1a97e3959aee7a0p181e58jsn81f9903174d8")
    .end(result => {
        console.log(result.body);
        callback(result.body.value);
    });
}

module.exports = {getJoke};