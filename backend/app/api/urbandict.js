const unirest = require('unirest');

const getDefinition = (term, callback) => {
    unirest.get(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`)
    .header("X-RapidAPI-Host", "mashape-community-urban-dictionary.p.rapidapi.com")
    .header("X-RapidAPI-Key", "fa4cf5d918msh1a97e3959aee7a0p181e58jsn81f9903174d8")
    .end(function (result) {
        if(result.body.list.length > 0)
            callback(result.body.list[0].definition);
        else
            callback(undefined);
    });
}

module.exports = {getDefinition};