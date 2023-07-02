const obj = { a: 1, b: 1, c: 1 };
const obj1 = { c: 1, b: 1, a: 1 };

const areObjectsEqual = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1.hasOwnProperty(key) && obj1[key] !== obj2[key]) {
      return false;
    }
  }
return true
};

console.log(areObjectsEqual(obj, obj1)); // true
