function fun1 () {}

const obj1 = {
    a: 1
}
const obj1Prototype = obj1.__proto__;
const obj1Constructor = obj1.constructor;
const fun1Prototype = fun1.prototype;
fun1.prototype = obj1;
const fun1Obj = new fun1()
const fun1ObjPrototype = fun1Obj.__proto__;

console.log(fun1Obj.constructor === fun1); // false
console.log(obj1Constructor === fun1Obj.constructor); // true
console.log(fun1ObjPrototype === obj1); // true
