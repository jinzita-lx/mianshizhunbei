function mergeSort(array) {
  if (!Array.isArray(array)) throw TypeError("类型错误");
  let len = array.length;
  if(len < 2) return array;
  let mid = len >> 1;
  
  return merge(mergeSort(array.slice(0,mid)), mergeSort(array.slice(mid)));
}
function merge(array1, array2) {
  let res = [];
  while (array1.length && array2.length) {
    if (array1[0] >= array2[0]) {
      res.push(array1.shift());
    } else {
      res.push(array2.shift());
    }
  }
  while(array1.length) {
    res.push(array1.shift());
  }
  while(array2.length) {
    res.push(array2.shift());
  }
  return res;
}
let array = [];
for (let i = 0; i < 100; i++) {
  array[i] = Math.floor(Math.random() * 100);
}

function myMergeSort(array) {
  if(!Array.isArray(array)) {
    throw new TypeError("类型错误");
  }
  if(array.length < 2) return array;
  let mid = array.length >> 1;
  return myMerge(myMergeSort(array.slice(0, mid)), myMergeSort(array.slice(mid)));
}
function myMerge(array1, array2) {
  let res = []
  while(array1.length && array2.length) {
    if(array1[0] >= array2[0]) {
      res.push(array2.shift())
    } else {
      res.push(array1.shift())
    }
  }
  while(array1.length) {
    res.push(array1.shift())
  }
  while(array2.length) {
    res.push(array2.shift())
  }
  return res;
}
let res = myMergeSort(array);


console.log(res);