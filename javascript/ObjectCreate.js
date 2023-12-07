/**
 * Object.create
 * @param {*} o 
 * @param  {...any} args 
 * @returns 
 */
function create(o, ...args) {
    function fun () {}
    fun.prototype = o;
    return new fun(...args);
}