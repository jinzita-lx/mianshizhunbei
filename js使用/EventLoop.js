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
})
console.log('e');
