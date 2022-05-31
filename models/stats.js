let mongoose = require('mongoose')

let Schema = mongoose.Schema

let statsSchema = new Schema({
    "dna": {type: Array, required: false},
    "type": {type: String, required: false, default: 'mutant'}
}, {
    collection: "Stats"
})

module.exports = mongoose.model("Stats", statsSchema)
