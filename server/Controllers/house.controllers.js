const House = require('../models/').House;

module.exports.get = async (req, res, next) => {

		res.status(200).json({
			message: "Found",
			name: 'Yitzchak'
		});
}

module.exports.create = async (req, res, next) => {

        console.log(req.body)
        try{
            const response =  await House.create({
                address: req.body.address,
                currentValue: req.body.currentValue,
                loanAmount: req.body.loanAmount,
                risk: req.body.risk
            });

            res.status(200).json({
                message: "Found",
                name: 'Yitzchak',
                response: response.toJSON(),
            });
        }
        catch(e){
            res.status(400).json({
                message: "Error: " + e.toString(),
            });
        }
}
