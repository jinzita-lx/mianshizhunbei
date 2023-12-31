/**
 * deepClone 深拷贝
 * @author jinzita-lx
 * @param {*} obj 
 * @param {*} map 
 * @returns 
 */

function deepClone (obj, map = new WeakMap()) {
  if(obj == null) return obj;
  if(obj instanceof Date) return new Date(obj);
  if(obj instanceof RegExp) return new RegExp(obj);
  if(typeof obj !== 'object') return obj;
  if(map.get(obj)) return map.get(obj);
  let cloneObj = Object.create(obj.__proto__);
  map.set(obj, cloneObj)
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], map);
    }
  }
  return cloneObj
}

/**
 * Test
 */
const objOrigin = {
  name:'lll',
  child: {
    name: '222',
  }
}
objOrigin.child.child = objOrigin;

const obj = deepClone(objOrigin);


console.log(objOrigin);
console.log(obj);