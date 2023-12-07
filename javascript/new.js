function MyNew () {
  let constructor = Array.prototype.shift.call(arguments);
  if(!constructor instanceof Function) throw new TypeError('type error');
  let obj = Object.create(constructor.prototype);
  let res = constructor.apply(obj,arguments);
  return res instanceof Object ? res : obj;
}
function myNew (constructor, ...args) {
  let obj = Object.create(constructor.prototype);
  let res = constructor.apply(obj, args);
  return res instanceof Object ? res : obj;
}

function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {}

let MyP = MyNew(Person, 'zhangsan', 18);
let p = new Person('zhangsan', 18);
console.log(p.constructor);
console.log(MyP.constructor)
