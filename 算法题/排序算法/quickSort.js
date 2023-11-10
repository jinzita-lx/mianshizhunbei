function quickSort(array) {
  if (!Array.isArray(array)) throw new TypeError("类型错误");
  if (array.length < 2) return array;
  sort(array, 0, array.length - 1);
  return array;
}

function sort(array, begin, end) {
  if(begin >= end) return;
  let left = begin, right = end;
  let temp = array[begin];
  while (left !== right) {
    while (array[right] >= temp && left < right) {
      right--;
    }
    while (array[left] <= temp && left < right) {
      left++;
    }
    if(left < right){
      let tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
    }
  }
  array[begin] = array[left];
  array[left] = temp;
  sort(array, begin, left - 1);
  sort(array, left + 1, end);
}
function MySort(array, begin, end) {
  if(begin >= end) return;
  let left = begin, right = end;
  let temp = array[begin];
  while(left !== right) {
    while(array[right] >= temp && left < right) {
      right --;
    }
    while(array[left] <= temp && left < right) {
      left ++;
    }
    if(left < right) {
      array[left] = array[left] + array[right]
      array[right] = array[left] - array[right]
      array[left] = array[left] - array[right]
    }
  }
  array[begin] = array[left]
  array[left] = temp
  MySort(array, begin, left - 1)
  MySort(array, left + 1, end)
}

let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 10);
}
// console.log(array);
// quickSort(array);
// console.log(array);
console.log(Array.prototype);