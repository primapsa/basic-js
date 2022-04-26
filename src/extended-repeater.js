const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let pieces = new Array(options.repeatTimes || 1).fill(str);
  let optionAditional = ('addition' in options) ? String(options.addition) : '';
  let addition = new Array(options.additionRepeatTimes || 1).fill(optionAditional);
  addition = addition.join(options.additionSeparator || "|");  
  let separator = addition + (options.separator || '+'); 
 return pieces.join(separator) + addition;  
}

module.exports = {
  repeater,
};
