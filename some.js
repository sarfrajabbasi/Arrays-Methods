// -----------Array.prototype.some()------------

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 

// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.


// --------------Syntax----------------- 

// // Arrow function
// some((element) => { /* ... */ } )
// some((element, index) => { /* ... */ } )
// some((element, index, array) => { /* ... */ } )

// // Callback function
// some(callbackFn)
// some(callbackFn, thisArg)

// // Inline callback function
// some(function(element) { /* ... */ })
// some(function(element, index) { /* ... */ })
// some(function(element, index, array){ /* ... */ })
// some(function(element, index, array) { /* ... */ }, thisArg)


// ------------Parameters-----------
// callbackFn
// A function to test for each element, taking three arguments:

// element
// The current element being processed in the array.

// indexOptional
// The index of the current element being processed in the array.

// arrayOptional
// The array some() was called upon.

// thisArgOptional
// A value to use as this when executing callbackFn.



// -----------Return value-----------
// true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.


// --------------Examples----------------


const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));



// -------------------OUTPUT----------

// expected output: true




// -----------Testing value of array elements-------------

// The following example tests whether any element in the array is bigger than 10.

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); 
[12, 5, 8, 1, 4].some(isBiggerThan10); 


// -------------OUTPUT-------------
// false
// true



// --------------Testing array elements using arrow functions----------

// Arrow functions provide a shorter syntax for the same test.

[2, 5, 8, 1, 4].some(x => x > 10);  
[12, 5, 8, 1, 4].some(x => x > 10); 


// -------------OUTPUT-------------

// false
// true




// ----------Checking whether a value exists in an array-----------

// To mimic the function of the includes() method, this custom function returns true if the element exists in the array:

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');  
checkAvailability(fruits, 'banana');


// -------------OUTPUT-------------

// false
 // true




// ---------Checking whether a value exists using an arrow function---------


const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   
checkAvailability(fruits, 'banana');


// -------------OUTPUT-------------

// false
 // true

// ------------Converting any value to Boolean------------------

const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

console.log(getBoolean(false));   
console.log(getBoolean('false')); 
console.log(getBoolean(1));       
console.log(getBoolean('true'));  



// -------------OUTPUT-------------

// false
// false
// true
// true


