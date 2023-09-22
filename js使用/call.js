Function.prototype.MyCall = function(context, ...args) {
  context.func = this;
  let res = context.func(...args);
  delete context.func;
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

obj.fn.MyCall(person, 'hello');
