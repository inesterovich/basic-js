const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean) {
    if (boolean === false) {
      this.type = 'reverse';
    } else {
      this.type = 'direct';
    }

  }

  encrypt(message, key) {
    while (key.length < message.length) {
      key += key;
    }

    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');

    for (let i = 0; i < messageArray.length; i++) {
      if (messageArray[i].charCodeAt(0) < 65) {
        keyArray.splice(i, 0, messageArray[i]);
      }

    }


    let messageCode = messageArray.map(x => x.charCodeAt(0));
    let keyCode = keyArray.slice(0, message.length).map(x => x.charCodeAt(0) - 65);// Косяк вот тут. Вычитать только при определенном условии
    let encryptArray = [];

    for (let i = 0; i < messageCode.length; i++) {

      if (messageCode[i] < 65 || messageCode[i] > 90) {
        encryptArray.push(messageCode[i]);

      } else {
        encryptArray.push(messageCode[i] + keyCode[i])
      }

      if (encryptArray[i] > 90) {
        encryptArray[i] -= 26;
      }

      // Где-то тут что-то не то. Пробелы превращаются в черти что

    }

    let result = encryptArray.map(x => String.fromCharCode(x));

    return result.join('');



  }
  decrypt(message, key) {
    while (key.length < message.length) {
      key += key;
    }

    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');

    for (let i = 0; i < messageArray.length; i++) {
      if (messageArray[i].charCodeAt(0) < 65 || messageArray[i] > 90) {
        keyArray.splice(i, 0, messageArray[i]);
      }

    }

    let messageCode = messageArray.map(x => x.charCodeAt(0));
    let keyCode = keyArray.slice(0, message.length).map(x => 65 <= x.charCodeAt(0) <= 90 ? x.charCodeAt(0) - 65 : x.charCodeAt(0));
    let decryptedArray = [];
    for (let i = 0; i < messageCode.length; i++) {
      if (messageCode[i] < 65 || messageCode[i] > 90) {
        decryptedArray.push(messageCode[i]);
        continue;
      } else {
        decryptedArray.push(messageCode[i] - keyCode[i])
      }

      if (decryptedArray[i] < 65) {
        decryptedArray[i] += 26
      }


    }

    let result = decryptedArray.map(x => String.fromCharCode(x));
    return result.join('');


  }
}

module.exports = VigenereCipheringMachine;
