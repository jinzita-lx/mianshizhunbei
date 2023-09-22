Array.prototype.MyReduce = function MyReduce(reduceFn, initialValue) {
  let index = 0;
  if(!initialValue) {
    initialValue = this[index];
    index ++;
  }
  for (; index < this.length; index++) {
    reduceFn(initialValue, this[index], index, this);  
  }
  return initialValue;
};

