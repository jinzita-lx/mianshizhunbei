const func1 = () => {
    console.log(this);
}

const func2 = function () {
    console.log(this);
}
let obj1 = {

    fun1: function () {
        console.log(this)
    }
}
let obj2 = {

    fun2: () => {
        console.log(this)
    }
}

func1();
func2();
obj1.fun1();
obj2.fun2();
let funct1 = obj1.fun1.apply(this);
let funct2 = obj2.fun2.apply(this);
console.log(func1, funct2);
// 剪头函数使用apply会生成undefined