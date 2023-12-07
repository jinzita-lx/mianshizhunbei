Array.prototype.MyMap = function MyMap(callbackFn, thisArg) {
  let result = []
  let currentArr = this;
  for (let i = 0; i < currentArr.length; i++) {
    result[i] = callbackFn.call(thisArg, currentArr[i], i, currentArr);
  }
  return result;
}

let obj = {
  0: "one",
  1: "two",
  length: 2,
}
let arr = Array.from(obj)
for(const el of arr) {
  console.log(el);
}