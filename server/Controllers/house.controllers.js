const House = require('../models/').House;
const calculateRisk = require('../utils/calcRisk.utils').calcRisk

/**
 * Create a new house entry with calculated risk.
 * 
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
module.exports.create = async (req, res) => {
    try{
        const risk = calculateRisk(req.body.currentValue, req.body.loanAmount);

        const house =  await House.create({
            address: req.body.address,
            currentValue: req.body.currentValue,
            loanAmount: req.body.loanAmount,
            risk: risk,
        });

        res.status(200).json({
            message: 'House created successfully',
            house: house.toJSON(),
        });
    }
    catch(e){
        res.status(400).json({
            message: "Error: " + e.toString(),
        });
    }
}

/**
 * Retrieve details of a specific house.
 * 
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
module.exports.get = async (req, res) => {
    try{
        const house = await House.findOne({ where: { id: req.params.id }});

        if(!house){
            throw 'House with id ' + req.params.id + ' not found';
        }
        
        res.status(200).json({
            message: 'Found house',
            house: house?.toJSON(),
        });
    }
    catch(e){
        res.status(400).json({
            message: "Error: " + e.toString(),
        });
    }
}

/**
 * Recalculate the risk of a loan and update details of a specific house.
 * 
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 */
module.exports.update = async (req, res) => {
    try{
        const house = await House.findOne({ where: { id: req.params.id }});

        if(!house){
            throw 'House with id ' + req.params.id + ' not found';
        }

        const risk = calculateRisk(req.body.currentValue, req.body.loanAmount);

        const updatedHouse = {
            currentValue: req.body.currentValue,
            loanAmount: req.body.loanAmount,
            risk: risk,
        }

        await House.update(updatedHouse, { 
            where: { id: req.params.id },
        });

        console.log('House: ', house)
        
        res.status(200).json({
            message: 'Updated successfully',
            house: { ...house?.dataValues, ...updatedHouse },
        });
    }
    catch(e){
        res.status(400).json({
            message: "Error: " + e.toString(),
        });
    }
}
