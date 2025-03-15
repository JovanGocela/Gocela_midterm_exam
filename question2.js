// Define the sumArray function that takes an array as a parameter
function sumArray(array) {
    // Use the reduce method to calculate the sum of array elements
    // Start the accumulator at 0 and add each element to it
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Test the sumArray function with an example
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
