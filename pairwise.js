// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
// Index	0	1	2	3	4
// Value	7	9	11	13	15

// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6


// function pairwise(arr, arg) {
//   // if arr length is zero answer will either be 0 if elements match or 0 if not, no non-found result answer specified
//   if (arr.length === 1) {
//     return 0;
//   }
//   // walk through the array
//   return arr.reduce((result, num, index) => {
//     // set repeat flag
//     let repeat = false;
//     // check this element against every following element
//     for (let i = index + 1; i < arr.length; i++) {
//       // if a match is found for the sum of arg
//       if (num + arr[i] === arg) {
//         // walk through the existing result pairs
//         for (let j = 0; j < result.length - 1; j++) {
//           // if the first element found already matches an existing first element, or if the second element found matches an existing second element
//           if ((result[j][0] === num && result[j][1] === index) || (result[j + 1][0] === arr[i] && result[j + 1][1] === i)) {
//             // set repeat to true and break this loop
//             repeat = true;
//             break;
//           }
//           // if the first element found matches second element already found or if the second element found already matches first element found
//           if ((result[j][0] === arr[i] && result[j][1] === i) || (result[j + 1][0] === num && result[j + 1][1] === index)) {
//             // set repeat to true and break this loop            
//             repeat = true;
//             break;
//           }
//         }
//         if (!repeat) {
//           // if we have not found a repeat, push the found match onto the result array
//           result.push([num, index], [arr[i], i]);
//           return result;
//         } else {
//           // we have found a repeat, reset repeat flag and continue our search
//           repeat = false;
//           continue;
//         }
//       } 
//     }
//     return result;
//   }, []).reduce((result, foundPair) => {
//     // take the final array of pairs and sum the indexes
//     result += foundPair[1];
//     return result;
//   }, 0);
// }

function pairwise(arr, arg){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        sum += i + j;
        arr[i] = arr[j] = NaN;
      }
    }
  }
  return sum;
}

console.log(pairwise([1,4,2,3,0,5], 7));
console.log('Expected: 11');
console.log(pairwise([7, 9, 11, 13, 15], 20));
console.log('Expected: 6');
console.log(pairwise([1, 3, 2, 4], 4)); 
console.log('Expected: 1');
console.log(pairwise([1, 1, 1], 2)); 
console.log('Expected: 1');
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); 
console.log('Expected: 10'); 
console.log(pairwise([], 100));
console.log('expected: 0');
