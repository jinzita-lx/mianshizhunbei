function throttle (fn, interval) {
    let curTime = Date.now();
    return function () {
        let context = this,
        args = arguments,
        nextTime = Date.now();
        if(nextTime - curTime >= interval) {
            curTime = Date.now();
            return fn.apply(context, args);
        }
    }
}
