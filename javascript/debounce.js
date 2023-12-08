/**
 * debounce
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */
function debounce (fn, delay = 1000) {
  let timer;
  return function (...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}
/**
 * Text
 * @param {*} a 
 */
function loga (a) {
  console.log(a);
}
let logb = debounce(loga);
let i = 1000;
while (i--) {
  // loga(i);
  logb(i);
}

