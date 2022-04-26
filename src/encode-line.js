const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encode = '';
  let count = 1;
  let template = {};
  if(typeof(str) !== 'string' || str.length == 0) return encode;

  // [...str].forEach((char) => {
  //   if(char in template){
  //     template[char] += 1;       
  //   }
  //   else{
  //     template[char]  = 1;
  //   }
  // });

  [...str].forEach((item, index, arr) => {
    if(item == arr[index + 1]){
      count++;
    }
    else{
      if(count > 1) encode += `${count}${item}`;
      else encode += `${item}`;
      count = 1;
    }
  });
  return encode;

}

module.exports = {
  encodeLine
};
