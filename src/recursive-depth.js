const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
   if (Array.isArray(arr)) {
     return 1 + arr.reduce(
      (prevResult, curItem) => Math.max(this.calculateDepth(curItem), prevResult), 0
     )
     
     ;
   } else {
     return 0;
   }

  }
};
