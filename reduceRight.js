// -----------Array.prototype.reduceRight()------------

// the reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.



// ----------SYNTAX-----------


// // Arrow function
// reduceRight((accumulator, currentValue) => { /* ... */ } )
// reduceRight((accumulator, currentValue, index) => { /* ... */ } )
// reduceRight((accumulator, currentValue, index, array) => { /* ... */ } )
// reduceRight((accumulator, currentValue, index, array) => { /* ... */ }, initialValue)

// // Callback function
// reduceRight(callbackFn)
// reduceRight(callbackFn, initialValue)

// // Callback reducer function
// reduceRight(function(accumulator, currentValue) { /* ... */ })
// reduceRight(function(accumulator, currentValue, index) { /* ... */ })
// reduceRight(function(accumulator, currentValue, index, array){ /* ... */ })
// reduceRight(function(accumulator, currentValue, index, array) { /* ... */ }, initialValue)



// -----------Parameters------------

// callbackFn
// Function to execute on each value in the array, taking four arguments:


// accumulator
// The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)


// currentValue
// The current element being processed in the array.


// indexOptional
// The index of the current element being processed in the array.


// arrayOptional
// The array reduceRight() was called upon.


// initialValue Optional
// Value to use as accumulator to the first call of the callbackFn. If no initial value is supplied, the last element in the array will be used and skipped. Calling reduce or reduceRight on an empty array without an initial value creates a TypeError.


// -------------Return value-------------

// The value that results from the reduction.




// ----------EXAMPLE-------------

console.log([0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
    return accumulator + currentValue;
  }));


//   -----------OUTPUT---------

// accumulator: 4, current: 3, index: 3, returns: 7
// accumulator: 7, current: 2, index: 2, returns: 9
// accumulator: 9, current: 1, index: 1, returns: 10
// accumulator: 10, current: 0, index: 0, returns: 10
// 10
// The value returned by reduceRight would be that of the last callback invocation (10).




//  ------- provide an initialValue, the result would look like this:-------

[0, 1, 2, 3, 4].reduceRight(function(accumulator, currentValue, index, array) {
    return accumulator + currentValue;
  }, 10);



// ------OUTPUT--------

// accumulator: 10, current: 4, index: 4, returns: 14
// accumulator: 14, current: 3, index: 3, returns: 17
// accumulator: 17, current: 2, index: 2, returns: 19
// accumulator: 19, current: 1, index: 1, returns: 20
// accumulator: 20, current: 0, index: 0, returns: 20
// 20

// The value returned by reduceRight this time would be, of course, 20.



// -------EXAMPLE---------------


// ------Sum up all values within an array-----------


const sum = [0, 1, 2, 3].reduceRight(function(a, b) {
    return a + b;
  });



//   ------------OUTPUT-----------
  // sum is 6



//  ---------- Flatten an array of arrays--------

const flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);


// ---------OUTPUT---------

// flattened is [4, 5, 2, 3, 0, 1]





// --------Run a list of asynchronous functions with callbacks in series each passing their results to the next-----------


const waterfall = (...functions) => (callback, ...args) =>
  functions.reduceRight(
    (composition, fn) => (...results) => fn(composition, ...results),
    callback
  )(...args);

const randInt = max => Math.floor(Math.random() * max)

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5) 




// ------------OUTPUT--------
// -> 14



// -----same as:----------

const computation2 = (input, callback) => {
  const f6 = x=> div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = x => split(f5, x);
  const f3 = x => sub2(f4, x);
  const f2 = x => mult3(f3, x);
  add5(f2, input);
}

console.log(computation2);


//--------- Difference between reduce and reduceRight-----------

const a = ['1', '2', '3', '4', '5'];
const left  = a.reduce(function(prev, cur)      { return prev + cur; });
const right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  
console.log(right); 


// --------OUTPUT-----------

// "12345"
// "54321"



// -----Defining composable functions------------

// Function composition is a mechanism for combining functions, in which the output of each function is passed into the next one, and the output of the last function is the final result. 

// In this example we use reduceRight() to implement function composition.

const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

// Increment passed number
const inc = (n) => n + 1

// Doubles the passed value
const double = (n) => n * 2

// using composition function
console.log(compose(double, inc)(2)); 

// using composition function
console.log(compose(inc, double)(2)); 



// -----------OUTPUT----------
// 6
// 5


