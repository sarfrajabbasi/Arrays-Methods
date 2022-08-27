// ----------UNSHIFT----------
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.


// --------Syntax--------

// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* ... ,*/ elementN)




// ---------Parameters-----------

// elementN
// The elements to add to the front of the arr.



// -------Return value--------

// The new length property of the object upon which the method was called.


// ---------EXAMPLE-----------

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));

console.log(array1);


// -----------OUTPUT------

// expected output: 5
// expected output: Array [4, 5, 1, 2, 3]


let arr = [4, 5, 6]

arr.unshift(1, 2, 3)
console.log(arr);
// [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6] // resetting the array

arr.unshift(1)
arr.unshift(2)
arr.unshift(3)

console.log(arr)



// ----------OUTPUT---------

// [3, 2, 1, 4, 5, 6]


// ----------Using unshift------------

let arr = [1, 2]

arr.unshift(0) // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1)  // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]) // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5])  // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]