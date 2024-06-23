/**
 * @param {Array} arr - The array to search through
 * @param {*} target - The value to search for
 * @returns {number} - The index of the target value if found, otherwise -1
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage
const array = [10, 20, 30, 40, 50];
const targetValue = 30;
const result = linearSearch(array, targetValue);

if (result !== -1) {
  console.log(`Target value ${targetValue} found at index ${result}.`);
} else {
  console.log(`Target value ${targetValue} not found in the array.`);
}
