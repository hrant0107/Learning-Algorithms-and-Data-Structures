# Selection Sort Algorithm

## Overview

Selection Sort is a simple sorting algorithm that divides the input list into two parts: the sorted part at the beginning and the unsorted part at the end. It repeatedly selects the smallest element from the unsorted portion and swaps it with the first unsorted element, effectively sorting the list incrementally.

## Function Declaration

```javascript
/**
 * Selection Sort Algorithm
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function selectionSort(arr) {
    // Implementation details explained below
}
```

The `selectionSort` function takes one argument:
- `arr` (array): The array that needs to be sorted.

## Sorting Logic

1. **Initialization**:
   - Start a `for` loop to iterate through the array from the beginning to the second-to-last element (`n - 1`).

2. **Finding the Minimum Element**:
   - Assume the current index (`i`) as the index of the minimum element (`minIndex`).
   - Iterate through the remaining unsorted portion of the array (starting from `i + 1`).
   - If a smaller element is found than the current minimum (`arr[j] < arr[minIndex]`), update `minIndex` to `j`.

3. **Swapping Elements**:
   - After finding the minimum element (`minIndex`), swap it with the element at index `i` if `minIndex` is not equal to `i`.

4. **Repeat Until Sorted**:
   - The outer loop (`for` loop) ensures that each element is placed in its correct position one by one, from the beginning of the array to the end.

5. **Return Sorted Array**:
   - Return the sorted array `arr`.


## Running the Code

To run the code:
1. Copy the `selectionSort` function into a JavaScript file (`selection-sort.js`).
2. Save the file and execute it using Node.js in your terminal:

   ```bash
   node selection-sort.js
   ```
