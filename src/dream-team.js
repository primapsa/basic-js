const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!Array.isArray(arr) || arr.length == 0) return false;
  let combined = arr
    .filter((name) => typeof name === "string")
    .map((letter) => {
      letter = letter.trim();
      letter = letter[0].toUpperCase();
      return letter;
    })
    .sort()
    .join("");
  return combined;
}

module.exports = {
  createDreamTeam,
};
