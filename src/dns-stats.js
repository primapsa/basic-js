const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let stat = {};
  if (!Array.isArray(arr)) return stat;

  arr.forEach((url) => {
    let reversedUrl = url.split(".").reverse();
    let gluedUrl = "";
    if (reversedUrl) {
      reversedUrl.forEach((urlPart) => {
        gluedUrl += "." + urlPart;
        if (gluedUrl in stat) {
          stat[gluedUrl] += 1;
        } else {
          stat[gluedUrl] = 1;
        }
      });
    }
  });
  return stat;
}
module.exports = {
  getDNSStats,
};
