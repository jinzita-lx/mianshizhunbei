/**
 * Function.call 实现
 * @param {*} context 
 * @param  {...any} args 
 * @returns 
 */
Function.prototype.MyCall = function (context, ...args) {
  context.fn = this;
  const res = context.fn(...args);
  delete context.fn;
  return res;
}
/**
 * Test
 */
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

obj.fn.MyCall(person, 'hello');
