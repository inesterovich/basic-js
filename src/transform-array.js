const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let option;
  let controls;

  if (!Array.isArray(arr)) {
    throw Error();
  } else {

    controls = [
      arr.indexOf('--discard-next'),//0
      arr.indexOf('--discard-prev'),//1
      arr.indexOf('--double-next'),//2
      arr.indexOf('--double-prev'),//3
    ];

    option = controls.filter(item => item != 1).length === 0 ? 'array' :
      controls[0] + 1 === controls[3] - 1 ? 'doubleDiskarded' :
        controls[2] + 1 === controls[3] - 1 ? 'doubleDoubled' :
          controls[0] + 1 === controls[1] - 1 ? 'diskardDiskarded' : 'diskardDoubled';
    let copyArr = arr.slice();

    switch (option) {

      case "array":
        return arr;

      case 'doubleDiskarded':
      case 'diskardDiskarded':
        copyArr.splice(copyArr.indexOf('--discard-next'), 3);
        break;
      case 'doubleDoubled':
        copyArr.splice(
          copyArr.indexOf('--double-next'), 3,

          copyArr[copyArr.indexOf('--double-next') + 1],
          copyArr[copyArr.indexOf('--double-next') + 1],
          copyArr[copyArr.indexOf('--double-next') + 1]);
        break;

      case 'diskardDoubled':
        copyArr = copyArr.filter(item => String(item).indexOf('--d') === -1)
        break;



    }

    return copyArr;
  }
};
