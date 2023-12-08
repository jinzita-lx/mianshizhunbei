/**
 * Function.prototype.bind 实现
 * @param {*} context 
 * @param  {...any} args 
 * @returns 
 */
Function.prototype.MyBind = function(context, ...args) {
  const self = this;
  const bound = function() {
    let innerArgs = [...args, ...arguments]
    let isNew = this instanceof bound;
    if(isNew) {
      return new self(...innerArgs);
    } else 
    return self.apply(context, innerArgs);
  }
  return bound;
}
