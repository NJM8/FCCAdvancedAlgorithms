// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).



function sym(args) {
  let arrays = Array.from(arguments);
  let arraysCopy = Array.from(arguments);
  if (arrays.length === 1) {
    return removeDups(arrays[0]);
  } else {
    let sd = diff(arrays.shift(), arrays.shift());
    return sym(sd, ...arrays);
  }
}

function diff(arr1, arr2){
  let arrays = Array.from(arguments);
  let arraysCopy = Array.from(arguments);
  return arraysCopy.reduce((result, array) => {
    array.forEach(val => {
      if (!arrays.every(arr => arr.includes(val))) {
        result.push(val);
      }
    });
    return result;
  }, []);
}

function removeDups(arr){
  return arr.reduce((result, num) => {
    if (result.includes(num)) {
      return result;
    } else {
      result.push(num);
      return result;
    }
  }, []);
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
