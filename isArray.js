//--------- Array.isArray()------------

// The Array.isArray() method determines whether the passed value is an Array.

// --------------Syntax--------------

// Array.isArray(value)



// --------------Parameters-----------


// value
// The value to be checked.



// ----------Return value-----------

// true if the value is an Array; otherwise, false.

// If the value is an Array, true is returned; otherwise, false is.





// ----------EXAMPLE----------

console.log(Array.isArray([1, 2, 3])); 
console.log(Array.isArray({foo: 123})); 
console.log(Array.isArray('foobar'));   
console.log(Array.isArray(undefined));  



// -------OUTPUT-------

// true
// false
// false
// false





// ---------Using Array.isArray-----------

// ------------all following calls return true-----------

console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array('a', 'b', 'c', 'd')));
console.log(Array.isArray(new Array(3)));
// Little known fact: Array.prototype itself is an array:
console.log(Array.isArray(Array.prototype));


// -----OUTPUT-------
// true
//  true
//  true
//  true
//  true
//  true



// ----------all following calls return false----------

console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray('Array'));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));
console.log(Array.isArray({ __proto__: Array.prototype }));



// -------OUTPUT--------

// false
// false
// false
// false
// false
// false
// false
// false
// false
// false



// --------------instanceof vs isArray---------------

// When checking for Array instance, Array.isArray is preferred over instanceof because it works through iframes.

var iframe = document.createElement('iframe');

document.body.appendChild(iframe);

xArray = window.frames[window.frames.length-1].Array;

var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array

console.log(Array.isArray(arr));  // true



// Considered harmful, because doesn't work through iframes

arr instanceof Array; // false