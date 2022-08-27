// ------------Array.prototype.map----------

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.



// -----------SYNTAX------------


// // Arrow function
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

// // Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// // Inline callback function
// map(function(element) { /* ... */ })
// map(function(element, index) { /* ... */ })
// map(function(element, index, array){ /* ... */ })
// map(function(element, index, array) { /* ... */ }, thisArg)




// --------PARAMETERS------------

// // callbackFn
// Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.

// The callbackFn function accepts the following arguments:

// // element
// The current element being processed in the array.

// // indexOptional
// The index of the current element being processed in the array.

// // arrayOptional
// The array map was called upon.

// // thisArgOptional
// Value to use as this when executing callbackFn





// ------------Return Value------------

// A new array with each element being the result of the callback function.





// -------------EXAMPLE-----------



// ---------Mapping an array of numbers to an array of square roots-----------

// code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.


const A1numbers = [1, 4, 9];
const roots = A1numbers.map((num) => Math.sqrt(num));
console.log(roots);
console.log(A1numbers);



// -------OUTPUT----------

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]





// -----------Using map to reformat objects in an array----------

// code takes an array of objects and creates a new array containing the newly reformatted objects.


const kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

console.log(reformattedArray);
console.log(kvArray);



// ----------OUTPUT----------

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]




// -----------Mapping an array of numbers using a function containing an argument------------

// code shows how map works when a function requiring one argument is used with it. 
// The argument will automatically be assigned from each element of the array as map loops through the original array.

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);
// console.log(doubles);
// console.log(numbers);



// -------OUTPUT---------

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]






//------------ Using map generically----------------

// shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values:

const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));
console.log(charCodes);





// -------OUTPUT---------


// charCodes now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]





// ------------Using map generically querySelectorAll----------

// shows how to iterate through a collection of objects collected by querySelectorAll. 
// This is because querySelectorAll returns a NodeList (which is a collection of objects).

// In this case, we return all the selected options' values on the screen:

const elems = document.querySelectorAll('select option:checked');
const values = Array.prototype.map.call(elems, ({ value }) => value);

// ----------OUTPUT---------
// console.log(values);
// An easier way would be the Array.from() method.


// -------------Tricky use case-------------


// It is common to use the callback with one argument (the element being traversed). Certain functions are also commonly used with one argument, even though they take additional optional arguments. These habits may lead to confusing behaviors.

// Consider:

['1', '2', '3'].map(parseInt);



// ------------output-----------

// While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].

// parseInt is often used with one argument, but takes two. The first is an expression and the second is the radix to the callback function, Array.prototype.map passes 3 arguments:

// the element
// the index
// the array
// The third argument is ignored by parseInt—but not the second one! This is the source of possible confusion.



// Here is a concise example of the iteration steps:

// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration  (index is 0): */ parseInt("1", 0);  // 1
/*  second iteration (index is 1): */ parseInt("2", 1);  // NaN
/*  third iteration  (index is 2): */ parseInt("3", 2);  // NaN



// --------Then let's talk about solutions---------

const returnInt = (element) => parseInt(element, 10);

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map((str) => parseInt(str)); // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map((str) => parseInt(str)); // [1, 2, 3]




// --------One alternative output of the map method being called with parseInt as a parameter runs as follow---------

const strings = ['10', '10', '10'];
const numbers = strings.map(parseInt);

console.log(numbers);// Actual result of [10, NaN, 2] may be unexpected based on the above description.



// ------------Mapped array contains undefined---------------

// When undefined or nothing is returned:

const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});



// -------------OUTPUT-------------

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]