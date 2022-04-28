const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(param = true) {
    this.reverseMode = param;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toLowerCase();
    key = key.toLowerCase();
    let keySize = Math.ceil(message.length / key.length);
    let keyword = key.repeat(keySize);

    let spaces = [];
    let pos = -1;
    while ((pos = message.indexOf(" ", pos + 1)) != -1) {
      spaces.push(pos);
    }
    if (spaces.length > 0) {
      keyword = keyword.split("");
      spaces.forEach((el) => {
        keyword.splice(el, 0, " ");
      });
      keyword = keyword.join("");
    }

    let startAlphabet = "a".charCodeAt();
    let alphabetCount = "z".charCodeAt() - startAlphabet + 1;
    let encoded = [];

    for (let i = 0; i < message.length; i++) {
      let code = message[i].charCodeAt();
      if (code >= startAlphabet && code <= alphabetCount + startAlphabet) {
        let keyShift = keyword[i].charCodeAt() - startAlphabet;
        let currentKey = message[i].charCodeAt() - startAlphabet;
        let encodedChar =
          ((keyShift + currentKey) % alphabetCount) + startAlphabet;

        encoded.push(String.fromCharCode(encodedChar));
      } else {
        encoded.push(message[i]);
      }
    }

    if (!this.reverseMode) encoded.reverse();
    return encoded.join("").toUpperCase();
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = message.toLowerCase();
    key = key.toLowerCase();
    let keySize = Math.ceil(message.length / key.length);
    let keyword = key.repeat(keySize);   
    let spaces = [];
    let pos = -1;
    while ((pos = message.indexOf(" ", pos + 1)) != -1) {
      spaces.push(pos);
    }
    if (spaces.length > 0) {
      keyword = keyword.split("");
      spaces.forEach((el) => {
        keyword.splice(el, 0, " ");
      });
      keyword = keyword.join("");
    }

    let startAlphabet = "a".charCodeAt();
    let alphabetCount = "z".charCodeAt() - startAlphabet + 1;
    let encoded = [];

    for (let i = 0; i < message.length; i++) {
      let code = message[i].charCodeAt();
      if (code >= startAlphabet && code <= alphabetCount + startAlphabet) {
        let keyShift = keyword[i].charCodeAt() - startAlphabet;
        let currentKey = message[i].charCodeAt() - startAlphabet;
        let encodedChar =
          ((currentKey - keyShift + alphabetCount) % alphabetCount) +
          startAlphabet;

        encoded.push(String.fromCharCode(encodedChar));
      } else {
        encoded.push(message[i]);
      }
    }
    if (!this.reverseMode) encoded.reverse();
    return encoded.join("").toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
