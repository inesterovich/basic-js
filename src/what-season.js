const CustomError = require("../extensions/custom-error");


function dateValidate(date) {
  let result;
  let dateString;
  dateString = date.toString();

  let dateYear = date.getFullYear().toString();

  if (dateString.indexOf(dateYear) === -1) {

    result = 'fakeDate';
  } else {
    result = 'realDate';
  }

  return result;

}

module.exports = function getSeason(date) {
  let result;
  let month;


  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else {
    let validity = dateValidate(date);
    if (validity === 'fakeDate') {
      throw new Error;

    } else {

      month = Number(date.getMonth());
    }

  }






  switch (month) {

    case 0:
    case 1:
    case 11:
      result = "winter";
      break;
    case 2:
    case 3:
    case 4:
      result = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      result = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      result = 'autumn';
      break;
  }

  return result;

}