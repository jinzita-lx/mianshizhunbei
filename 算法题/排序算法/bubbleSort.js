function bubbleSort(array) { 
  let len = array.length;
  function swap(array, a, b) { 
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }
  for (let i = 0; i < len; i++){
    for (let j = 0; j < len - i - 1; j++){
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
console.log(bubbleSort([4, 3, 9, 1, 6, 2]));
console.log(MyBubbleSort([4, 3, 9, 1, 6, 2]));
function MyBubbleSort(array){
  for (let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - i - 1; j++){
      if(array[j] > array[j+1]){
        swap(array, j, j+1);
      }
    }
  }
  return array;
}
function swap(array, a, b) {
  array[a] = array[a] + array[b];
  array[b] = array[a] - array[b];
  array[a] = array[a] - array[b];
}