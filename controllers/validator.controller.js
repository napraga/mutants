module.exports = (t) => {
    let config = require('../config.js')
    let Stats = require('../models/stats.js');
    let mutantValidator = require('../services/mutantValidator.js')(t)

    let validator = {}

    validator.checkMutant = async (req, res) => {
        try {
            const { dna } = req.body;
            mutantValidator.detectMutant(dna) ? await validator.mutant(res, dna) : await validator.human(res, dna);
        } catch (error) {
            res.status(400).send(error.message);
        }

    }

    validator.mutant = async (response, dna) => {
        try {
            const exists = await validator.existeDB(dna);
            if (!exists){ 
                await Stats.create({ 'dna': dna, type: config.MUTANT })
                return response.status(403).send(`es ${config.MUTANT}`);
            } else {
                throw Error(`el DNA ${config.MUTANT} ya existe`, error);
            }
        } catch (error) {
            throw Error(`el DNA ${config.MUTANT} ya existe`, error);
        }
      };

    validator.existeDB = async (dna) => {
        const exist = await Stats.findOne({ dna });
        return (exist)?true:false;
    };

    validator.human = async (response, dna) => {
        try {
            const exists = await validator.existeDB(dna);
            if (!exists){ 
                await Stats.create({ 'dna': dna, type: config.HUMAN })
                return response.status(403).send(`es ${config.HUMAN}`);
            } else {
                throw Error(`el DNA ${config.HUMAN} ya existe`, error);
            }
        } catch (error) {
            throw Error(`el DNA ${config.HUMAN} ya existe`, error);
        }
    };
    return validator;
}


