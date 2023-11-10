setTimeout(()=>{
  console.log("a");
});
new Promise((resolve)=>{
  console.log("b");
  setTimeout(()=>{
    console.log("f");
  })
  resolve();
}).then(()=> {
  console.log("c");
  setTimeout(() => {
    console.log('d');
  });
}).then(() => {
}).then(() => {
  console.log("g");
})
Promise.resolve().then(() => {
  console.log("h");
}).then(() => {
  console.log("i");
}).then(() => {
  console.log("j");
})
console.log('e');
// b e c h i g j a f d

// 两个promise异步的执行先后




