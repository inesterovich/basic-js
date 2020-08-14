const CustomError = require("../extensions/custom-error");

function additionString(options) {
  let result = [];
  let separator = options.additionSeparator === undefined ? '|' : options.additionSeparator;

  if (options.addition !== undefined) {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {

      result.push(options.addition);

      if (options.additionRepeatTimes > 1 && i != options.additionRepeatTimes) {
        result.push(separator)

      }

    }


    return result.join('');
  }

  return undefined;






}







module.exports =
  function repeater(str, options) {
    str = String(str);
    if (options.addition !== undefined) {
      options.addition = String(options.addition);
    }

    if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
    }

    if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
    }


    let result = [];
    let endString = additionString(options);
    let fullstr = endString === undefined ? str : str + endString;
    let separator = options.separator === undefined ? '+' : options.separator;

    for (let i = 1; i <= options.repeatTimes; i++) {

      result.push(fullstr);

      if (separator != undefined && i !== options.repeatTimes) {
        result.push(separator);
      }




    }

    return result.join('');
  };