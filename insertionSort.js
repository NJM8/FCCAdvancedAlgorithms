// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function insertionSort(array) {
  let sortedArray = [];
  sortedArray.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    const insertIndex = getInsertIndex(array[i], sortedArray);
    sortedArray.splice(insertIndex, 0, array[i]);
  }

  return sortedArray;
}

function getInsertIndex(number, array) {
  let index = array.length;

  for (let i = 0; i < array.length; i++) {
    if (number < array[i]) {
      index = i;
      break;
    }
  }

  return index;
}

const array = [1, 3, 4, 2, 5];
const arr2 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(insertionSort(array));
console.log(insertionSort(arr2));
