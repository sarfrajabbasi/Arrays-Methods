// -------Array.prototype.includes-------

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.


// -------SYNTAX---------

// includes(searchElement)
// includes(searchElement, fromIndex)



//---------PARAMETERS---------


// --searchElement--------

// The value to search for.

// NOTE: When comparing strings and characters, includes() is case-sensitive.


//--fromIndex Optional--------

// The position in this array at which to begin searching for searchElement.

// The first element to be searched is found at fromIndex for positive values of fromIndex, or at "arr.length + fromIndex" for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).

// Defaults to 0.



// -------Return Value------

// A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

// Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.

// NOTE: Technically speaking, includes() uses the sameValueZero algorithm to determine whether the given element is found.


// EXAMPLES:-----

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


console.log([1, 2, 3].includes(4))     
console.log([1, 2, 3].includes(2))     
console.log([1, 2, 3].includes(3, 3))  
console.log([1, 2, 3].includes(3, -1)) 
console.log([1, 2, NaN].includes(NaN)) 
console.log(["1", "2", "3"].includes(3))


// -----OUTPUT--------

// False
// true
// False
// true
// true
// False


// -----------FromIndex is greater than or equal to the array length------------

// If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

let arr = ['a', 'b', 'c']

console.log(arr.includes('c', 3))    
console.log(arr.includes('c', 100))  


// ------OUTPUT---------

// false
// false



// ------COMPUTED index IS LESS THAN 0-----

// If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin searching for searchElement. If the computed index is less than or equal to 0, the entire array will be searched.


// array length is 3

// fromIndex is -100

// computed index is 3 + (-100) = -97

let arr = ['a', 'b', 'c']

console.log(arr.includes('a', -100)) 
console.log(arr.includes('b', -100)) 
console.log(arr.includes('c', -100)) 
console.log(arr.includes('a', -2))   


// ----OUTPUT-------

// true
// true
// true
// false



// -------includes() used as a generic method----------


// includes() method is intentionally generic. It does not require this value to be an Array object, so it can be applied to other kinds of objects (e.g. array-like objects).


// The example below illustrates includes() method called on the function's arguments object.

(function() {
  console.log(Array.prototype.includes.call(arguments, 'a'))  
  console.log(Array.prototype.includes.call(arguments, 'd'))  
})('a','b','c') 


// ------OUTPUT---------

// true
// false