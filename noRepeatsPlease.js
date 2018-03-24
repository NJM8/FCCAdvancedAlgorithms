// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// n!/r!(n − r)!


function permAlone(str) {
  if (str.length === 1) {
    return 1;
  }
  let perms = permutateStr(str);

  return perms.reduce((res, perm) => {
    let repeat = false;
    for (let i = 0; i < perm.length; i++) {
      if (perm[i] === perm[i + 1]){
        repeat = true;
      }
    }
    if (repeat) {
      return res;
    } else {
      res.push(perm);
      return res;
    }
  }, []).length;
}

function permutateStr(str){
  let results = [];

  if (str.length === 1) {
    results.push(str);
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let charsLeft = str.substring(0, i) + str.substring(i + 1);
    let innerPerms = permutateStr(charsLeft);
    for (let j = 0; j < innerPerms.length; j++) {
      results.push(firstChar + innerPerms[j]);
    }
  }
  return results;
}


console.log(permAlone('aab'));


