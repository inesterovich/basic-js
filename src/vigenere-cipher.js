const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(data = true) {
    this.data = data;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error();
    const maxLength = message.length;
    let resultArr = [];
    let step = -1;
    for (let i = 0; i < maxLength; i++) {
      if (this.alphabet.indexOf(message[i].toUpperCase()) > -1) {
        step++;
        let num = (this.alphabet.indexOf(message[i].toUpperCase()) + this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        resultArr = [...resultArr, ...this.alphabet[num]];
      } else {
        resultArr = [...resultArr, ...message[i]];
      }
    }
    return this.data ? resultArr.join('') : resultArr.reverse().join('');
  }

  decrypt(message, key) {
    if(!message || !key) throw new Error();
    const maxLength = message.length;
    let resultArr = [];
    let step = -1;
    for (let i = 0; i < maxLength; i++) {
      if (this.alphabet.indexOf(message[i].toUpperCase()) > -1) {
        step++;
        let num = (this.alphabet.indexOf(message[i].toUpperCase()) + this.alphabet.length - this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        resultArr = [...resultArr, ...this.alphabet[num]];
      } else {
        resultArr = [...resultArr, ...message[i]];
      }
    }
    return this.data ? resultArr.join('') : resultArr.reverse().join('');
  }
}


module.exports = VigenereCipheringMachine;
