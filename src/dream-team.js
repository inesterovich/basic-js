const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {

  let result = Array.isArray(array) ? array.filter(item => typeof item === 'string')
    .map(item => item.trim())
    .map(item => item[0].toUpperCase())
    .sort()
    .join('') : false;


  return result;
}




