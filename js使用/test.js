// const obj = {
//     a: () => {
//         console.log(this);
//     }
// }
// obj.a.call('123');

const obj = {
    a: function() {
        console.log(this);
        window.setTimeout(() => {
            console.log(this);
        }, 1000);
    }
}
obj.a.call(obj);