// This file contains the code to complete all tasks under the section 'Exploring Array Manipulation in JavaScript'

console.log("Part 1");

// Task 1: Adding and Removing Elements

let fruits = ['apple', 'banana', 'orange']; // create array
console.log(`Fruits: ${fruits}`); // log for verification

fruits.push('lemon'); // push to array
console.log(`Fruits: ${fruits}`); // log for verification

fruits.pop(); // pop last item from array
console.log(`Fruits: ${fruits}`); // log for verification

// Task 2: Sorting Arrays

let originalArray = [3, 1, 5, 2, 4]; // create array (used for task 2 & 3)
console.log(`Numbers: ${originalArray}`); // log for verification

sortedArray = originalArray.sort(); // sort original array
console.log(`Numbers: ${sortedArray}`); // log for verification

// Task 3: Applying Array Methods

numbers = [3, 1, 5, 2, 4]; // reassign value of array (create)
console.log(`Numbers: ${numbers}`); // log for verification

numbers = numbers.map(num => num * 2); // map: double each number
console.log(`Numbers: ${numbers}`); // log for verification

filteredArray = originalArray.filter(num => num % 2 === 0); // filter out even numbers
console.log(`Numbers: ${filteredArray}`); // log for verification