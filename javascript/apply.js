/**
 * Function.prototype.apply 实现
 * @param {*} thisArg 
 * @param {*} args 
 * @returns 
 */
Function.prototype.MyApply = function (thisArg, args) {
  const context = thisArg;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

let obj = {
  name: 'John Doe',
  fn: function getName(word) {
    console.log(this.name +'says'+ word);
  }
}
let person = {
  name: 'LiRuLi',
  fn: function fn(word) {
    console.log(word);
  }
}
obj.fn.apply(person, ['hello']);
obj.fn.MyApply(person, ["hello"]);
