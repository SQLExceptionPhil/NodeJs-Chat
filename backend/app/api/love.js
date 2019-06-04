const unirest = require('unirest');

const getLove = (name, lovedName, callback) => {
    unirest.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${name}&sname=${lovedName}`)
    .header("X-RapidAPI-Host", "love-calculator.p.rapidapi.com")
    .header("X-RapidAPI-Key", "fa4cf5d918msh1a97e3959aee7a0p181e58jsn81f9903174d8")
    .end(result => {
        callback(result.body.percentage);
    });
}

module.exports = {getLove};