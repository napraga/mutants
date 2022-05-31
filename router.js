module.exports = (app, mongoose) => {
    let config = require('./config.js')
    let tools = require('./services/tools.js')

    tools.db = mongoose
    tools.app = app
    let apiBase = '/'

    // REQUIRE CONTROLLERS

    let mutantValidator = require('./controllers/validator.controller.js')(tools)
    let stats = require('./controllers/stats.controller.js')(tools)

    // ROUTES WEBSERVICES

    // MUTANT
    app.post(apiBase+'mutant', mutantValidator.checkMutant)
    app.get(apiBase+'stats', stats.getStats)

}