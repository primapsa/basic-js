const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 
function deleteDigit(n) {
  let container = [];
  let max = 0;
  [...String(n)].forEach((item, indx, arr) =>{
   let combination = arr.slice(0, indx).join('')+arr.slice(indx +1).join('');
   combination = parseInt(combination);
   container.push(combination)
  });
  max = Math.max(...container);
  
return max;
}



module.exports = {
  deleteDigit
};
