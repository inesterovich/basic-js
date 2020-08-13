const CustomError = require("../extensions/custom-error");

function isArr(arr) {

  if (!Array.isArray(arr)) {
    throw Error()
  }

}

function countControls(arr) {
  let controls = [
    arr.indexOf('--discard-next'),//0
    arr.indexOf('--discard-prev'),//1
    arr.indexOf('--double-next'),//2
    arr.indexOf('--double-prev'),//3
  ];

  let controlChecker = controls.filter(item => item > -1)

  return controlChecker.length;
}

function transformSimpleArr(arr) {
	let result = []
	let i = 0;

	while (i < arr.length) {
		

		switch (arr[i]) {

			case '--discard-next':
				if (i === arr.length - 1) {
					i++;
				} else {

					i += 2;
				}
				
				break;
			case '--discard-prev':
				if (i === 0) {
					i++;

				
				}
				else {
					result.pop(arr[i - 1]);	
					i++;
				}
				
				
				
				break;
			case '--double-next':
				if (i === arr.length - 1) {
					i++;
				} else {
					result.push(arr[i], arr[i]);
					i++;
				};
				break;
			case '--double-prev':

				if (i === 0) {
					i++;
				} else {
					result.splice(arr[i - 1], 2, arr[i], arr[i]);
					i++;
				}
				break;
			default:
				result.push(arr[i]);
				i++;
				break;
			
		}
	}


	return result;
}

function transformDifficultArr(arr) {
  let controls = [
    arr.indexOf('--discard-next'),//0
    arr.indexOf('--discard-prev'),//1
    arr.indexOf('--double-next'),//2
    arr.indexOf('--double-prev'),//3
  ]

  let option = controls[0] + 1 === controls[3] - 1 ? 'doubleDiskarded' :
    controls[2] + 1 === controls[3] - 1 ? 'doubleDoubled' :
      controls[0] + 1 === controls[1] - 1 ? 'diskardDiskarded' :
        controls[2] + 1 === controls[1] - 1 ? 'diskardDoubled' : 'default';
  let copyArr = arr.slice();
  switch (option) {

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

    default:
      transformSimpleArr(arr);
      break;
  }


  return copyArr;
}


module.exports = function transform(arr) {
  isArr(arr);
  let controls = countControls(arr);
  let result;


  if (controls === 0) {
    return arr;
  } else if (controls === 1) {
    result = transformSimpleArr(arr);
  } else {
    result = transformDifficultArr(arr);
  }

  return result;
};
