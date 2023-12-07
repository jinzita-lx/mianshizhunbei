const obj1 = {
    a: 1,
    b: 2,
}
const obj2 = {}
obj2.__proto__ = obj1
obj1.c = 3;
obj1.__proto__.d = 4;
console.log(obj1);
console.log(obj1.d);
console.log(obj2.constructor.prototype);
console.log(obj2.__proto__);