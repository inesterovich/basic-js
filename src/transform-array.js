const CustomError = require("../extensions/custom-error");

function isArr(arr) {

  if (!Array.isArray(arr)) {
    throw Error()
  }

}


module.exports = function transform(arr) {
	isArr(arr);
	let result = []
	 let i = 0;
 
	 while (i < arr.length) {
		 
 
		 switch (arr[i]) {
 
			 case '--discard-next':
				 if (i === arr.length - 1) {
					 i++;
				 }
				 else if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') {
					 i += 3; //doubleDiscarded or discardDiscarded
					 
				 }
				 else {
 
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
				 if ((i === arr.length - 1 ) || String(arr[i+1]).indexOf('--d') !== -1) {
					 i++;
				 } else {
					 result.push(arr[i+1], arr[i+1]);
					 i+=2;
				 };
				 break;
			 case '--double-prev':
 
				 if (i === 0) {
					 i++;
				 } else {
					 result.push(arr[i -1]);
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
};
