const express = require('express')
const config = require('./config.js')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ // to support URL-encoded
	extended: false
}))

app.use(bodyParser.json()) // to support JSON-encoded

mongoose.connect(config.mongoCnx, { useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    connectTimeoutMS: 3000,
    auth: { "authSource": "admin" },
    user: "meli",
    pass: "m85AdCapJEOFWrCn"
})

require("./router.js")(app, mongoose)

app.get('/', (req, res) => res.send('El primer paso para entender tu poder es conocer su alcance. Para conocer tu alcance debes enviar tu secuencia de ADN.'));

app.listen(config.serverPort, () => console.log('Listener on port: ' + config.serverPort));