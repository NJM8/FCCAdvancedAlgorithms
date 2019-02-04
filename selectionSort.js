// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const lowestInx = findMinIndex(array, i);

    if (lowestInx === i) {
      continue;
    }

    const temp = array[lowestInx];

    array[lowestInx] = array[i];
    array[i] = temp;
  }

  return array;
}

function findMinIndex(array, low) {
  let minIndex = low;

  for (let i = low; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

const array = [1, 3, 4, 2, 5];
const arr2 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(selectionSort(array));
console.log(selectionSort(arr2));



