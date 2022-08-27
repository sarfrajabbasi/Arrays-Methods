// Array.prototype.every

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// SYNTAX

// // Arrow function

// every((element) => { /* ... */ } )
// every((element, index) => { /* ... */ } )
// every((element, index, array) => { /* ... */ } )

// // Callback function

// every(callbackFn)
// every(callbackFn, thisArg)

// // Inline callback function

// every(function(element) { /* ... */ })
// every(function(element, index) { /* ... */ })
// every(function(element, index, array){ /* ... */ })
// every(function(element, index, array) { /* ... */ }, thisArg)
// const isBelowThreshold = (currentValue) => currentValue < 40;

// Parameters

// callbackFn
// A function to test for each element, taking three arguments:

// element
// The current element being processed in the array.

// index Optional
// The index of the current element being processed in the array.

// array Optional
// The array every was called upon.

// thisArg Optional
// A value to use as this when executing callbackFn.

// Return value
// true if the callbackFn function returns a truthy value for every array element. Otherwise, false.



const isBelowThreshold = (currentValue) => currentValue < 40;

const arr = [1, 30, 39, 29, 10, 13];

console.log(arr.every(isBelowThreshold)); // expected output: true

const array = [1, 30, 39, 29, 10, 13];

console.log(array.every(isBelowThreshold)); // expected output: true

const current = (currentValue) => currentValue < 100;

const array1 = [10, 30, 39, 29, 10, 13];

console.log(array1.every(current)); // expected output: true




// Testing size of all array elements

function isBigEnough(element, index, array) {
  return element > 10;
}
console.log([12, 5, 14, 8, 55, 123].every(isBigEnough));//false
console.log([12, 54, 14, 80, 55, 123].every(isBigEnough));//true

// Check if one array is a subset of another array

function isSubset(array1, array2) {
  return array2.every(function (element) {
    return array1.includes(element);
  });
}
console.log(isSubset([1, 2, 3, 4, 5, 6, 7, 8], [5, 7, 6]));//true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7, 8], [5, 8, 71]));//false

// Using arrow functions

console.log([12, 5, 8, 130, 44].every((x) => x >= 10));//false
console.log([12, 54, 18, 130, 44].every((x) => x >= 10));//true

// Affecting Initial Array (modifying, appending, and deleting)

//Modifying items

let arrr = [1, 2, 3, 4];
arrr.every((elem, index, arrr2) => {
  arrr[index + 1] -= 1;
  console.log(`[${arrr}][${index}]-> ${elem}`);
  return elem < 2;
});


// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2


// Appending items

 const aarr = [1, 2, 3];
aarr.every((elem, index, arr) => {
  aarr.push("new");
  console.log(`[${aarr}][${index}->${elem}]`);
  return elem < 4;
});

//  Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3


// Deleting items

 const aarrr = [1, 2, 3, 4];
aarrr.every((elem, index, arr) => {
  aarrr.pop();
  console.log(`[${aarrr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
