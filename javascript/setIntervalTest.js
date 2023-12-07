
let a = 1;
function setA(b) {
    a = b
}

let time = setInterval(() => {
    console.log(a);
    setA(a+1);
},200);

