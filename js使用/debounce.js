function debounce(fn, delay) {
  delay = delay ?? 1000;
  let timer;
  return function () {
    const context = this, args = arguments;
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn,apply(context, args);
    }, delay);
  }
}
