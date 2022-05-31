module.exports = (t) => {
    let Stats = require('../models/stats.js');

    let validator = {}

    validator.getStats = async (req, res) => {
        try {
          const response = await validator.parseResponse();
          res.send(response);
        } catch (error) {
          logger.error(error.message);
          res.status(500).send('Server Error');
        }
    };

    validator.parseResponse = async () => {
        const statsResponse = await Stats.find({});
      
        const format = {
          count_mutant_dna: 0,
          count_human_dna: 0,
        };
      
        statsResponse.forEach((item) => {
          switch (item.type) {
            case 'humano':
              format.count_human_dna += 1;
              break;
            case 'mutante':
              format.count_mutant_dna += 1;
              break;
          }
        });
      
        format.ratio = format.count_human_dna / format.count_mutant_dna || 0;
      
        return { ...format };
      };
    
    return validator;
}
