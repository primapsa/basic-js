const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(value){
    let isArray = value.find(e => Array.isArray(e));
    if(isArray){
      value = [].concat(...value);
    }else{
      return 1;
    }
    return 1 + this.calculateDepth(value);
  }
} 

module.exports = {
  DepthCalculator,
};
