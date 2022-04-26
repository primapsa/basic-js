const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(/*disksNumber, turnsSpeed*/ ) {
  throw new NotImplementedError('Not implemented');
  let stackLeft = stackMiddle = stackRight = new Array(disksNumber);
  for(let i = disksNumber -1, j = 1; i >=0 ; i--, j++){
    stackLeft[i] = j;
  }
  console.log(stackLeft);
}
//calculateHanoi(5,5);
module.exports = {
  calculateHanoi
};
