/**
 * Function calculates the risk of a loan based on the current value of a house
 * @param {float} currentValue
 * @param {float} loanAmount
 * @return {float} calculated risk
 */
module.exports.calcRisk = (currentValue, loanAmount) => {
    let risk = loanAmount / currentValue;

    if(loanAmount > currentValue * 0.5){
        risk += 0.1
    }

    return Math.min(risk, 1);
}