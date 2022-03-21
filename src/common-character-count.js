const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if(typeof(s1) !== 'string' || s1.length < 1) return 0;

  let chars = { 'count': 0};
  [...s1].forEach(item => {    
    
    if(item in chars){
      chars[item] += 1;      
    }
    else{
      chars[item] = 1;
    }
  });

  [...s2].forEach((item) => {
    if(item in chars){
      chars[item] -= 1;
      if(chars[item] >= 0){
        chars.count += 1;
      }
    }
  });
  return chars.count;  
   
}

module.exports = {
  getCommonCharacterCount
};
