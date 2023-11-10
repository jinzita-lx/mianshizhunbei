function debounce(fn, delay) {
  delay = delay ?? 1000;
  let timer;
  return function () {
    const context = this, args = arguments;
    if(timer) clearTimeout(timer);
    timer = null;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}
function myDebounde (fn, delay = 1000) {
  let timer;
  return function (...args) {
    const context = this
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}
function loga (a) {
  console.log(a);
}
let logb = debounce(loga);
let i = 1000;
while (i--) {
  // loga(i);
  logb(i);
}

