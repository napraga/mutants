const config = require('../config')
// let clientModel = require('../models/clients.js')
// let languageModel = require('../models/languages.js')
// let moviesModel = require('../models/movies.js')

const tools = {
    json : (json, res, prettify = false) => {
        res.setHeader('Content-Type', 'application/json');
        if(prettify){
            res.send(JSON.stringify(json, null, 2))
        }else{
            res.send(JSON.stringify(json))
        }
    },
}

module.exports = tools