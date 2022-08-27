// --------Array.prototype.flatMap--------

// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.


//------Syntax--------

// // ------Arrow function---------
// flatMap((currentValue) => { /* ... */ } )
// flatMap((currentValue, index) => { /* ... */ } )
// flatMap((currentValue, index, array) => { /* ... */ } )

// // -----------Callback function-------------
// flatMap(callbackFn)
// flatMap(callbackFn, thisArg)

// //------------- Inline callback function----------
// flatMap(function(currentValue) { /* ... */ })
// flatMap(function(currentValue, index) { /* ... */ })
// flatMap(function(currentValue, index, array){ /* ... */ })
// flatMap(function(currentValue, index, array) { /* ... */ }, thisArg)




// -----------Parameters------------

// callbackFn
// Function that produces an element of the new Array, taking three arguments:

// currentValue
// The current element being processed in the array.

// indexOptional
// The index of the current element being processed in the array.

// arrayOptional
// The array map was called upon.

// thisArgOptional
// Value to use as this when executing callbackFn.



// ---------Return value--------

// A new array with each element being the result of the callback function and flattened to a depth of 1.



//------------ Alternative-------------
//---------- Pre-allocate and explicitly iterate----------

var arr = [1,2,3,4];

arr.flatMap(x => [x,x * 2]);

var n = arr.length;
var acc = new Array(n * 2);
for (let i =0;i<n;i++){
    var x = arr[i];
    acc[i * 2] = x;
    acc[i * 2 + 1] = x * 2;
}
console.log(acc)// [1, 2, 2, 4, 3, 6, 4, 8]



//-------------- Examples--------------

// ---------map() and flatMap()--------------

let arr1 = [1,2,3,4];


console.log(arr1.map(x => [x * 2]));// [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2]));// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap(x=> [[x * 2]]));// [[2], [4], [6], [8]]



let arr2 =["it's Sunny in","","California"];

console.log(arr2.map(x => x.split(" ")));//[["it's","Sunny","in"],[""],["California"]]

console.log(arr2.flatMap(x => x.split(" ")));//["it's","Sunny","in", "", "California"]





// -------------For adding and removing items during a map()-----------

// flatMap can be used as a way to add and remove items (modify the number of items) during a map. In other words, it allows you to map many items to many items (by handling each input item separately), rather than always one-to-one. In this sense, it works like the opposite of filter. Return a 1-element array to keep the item, a multiple-element array to add items, or a 0-element array to remove the item.




// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1

let a = [5,4,-3,20,17,-33,-4,18];

console.log(a.flatMap((n)=> (n<0)? []:(n % 2==0)?[n]:[n-1,'yes']));


// --------output------------

//[4, 'yes', 4, 20, 16, 'yes', 18]