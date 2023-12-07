function PromiseAll(array){
  return new Promise((resolve, reject) => {
    if(!Array.isArray(array) || array.length === 0){
      reject('参数错误')
    }
    let resArr = []
    let index = 0
    for(let i = 0; i< array.length; i++){
      Promise.resolve(array[i]).then(res => {
        resArr[i] = res;
        index++;
        if(index === array.length){
          resolve(resArr)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

function MyPromiseAll (promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      reject("TypeError")
    }
    let resArr = []
    let index = 0
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(res => {
        index ++;
        resArr[i] = res;
        if(index >= promises.length) {
          resolve(resArr);
        }
      }).catch(err => {
        reject(err);
      })
    }
  })
}
