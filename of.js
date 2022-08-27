// ------------Array.of-----------------(kisi bhi Element ko array ma convet krta h ) => array.of(1) =[1]

// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).



// ------------Syntax----------

// Array.of(element0)
// Array.of(element0, element1)
// Array.of(element0, element1, /* ... ,*/ elementN)



// ----------Parameters-------------
// elementN
// Elements used to create the array.



// ------------Return value------------
// A new Array instance.


// ------------EXAMPLE-------------

console.log(Array.of(7)); 
// [7]
console.log(Array(7)); 
// array of 7 empty slots

console.log(Array.of(1, 2, 3));
// [1, 2, 3]
console.log(Array(1, 2, 3));    
// [1, 2, 3]


// ---------Using Array.of---------


console.log(Array.of(1));         
console.log(Array.of(1, 2, 3));   
console.log(Array.of(undefined)); 



// -----------OUTPUT----------
// [1]
// [1, 2, 3]
// [undefined]