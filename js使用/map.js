Array.prototype.MyMap = function MyMap(callbackFn, thisArg) {
  let result = []
  let currentArr = this;
  for (let i = 0; i < currentArr.length; i++) {
    result[i] = callbackFn.call(thisArg, currentArr[i], i, currentArr);
  }
  return result;
}

