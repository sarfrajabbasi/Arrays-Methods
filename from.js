//---------- Array.from---------

// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.



// ------SYNTAX---------

//  --------Arrow function--------

// Array.from(arrayLike, (element) => { /* ... */ } )
// Array.from(arrayLike, (element, index) => { /* ... */ } )


//  -------Mapping function---------

// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)


// --------Inline mapping function----------

// Array.from(arrayLike, function mapFn(element) { /* ... */ })
// Array.from(arrayLike, function mapFn(element, index) { /* ... */ })
// Array.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
// Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)




// -------Parameters----------

// ---arrayLike:-
// An array-like or iterable object to convert to an array.

// -------mapFn Optional:-
// Map function to call on every element of the array.

// -----thisArg Optional:-
// Value to use as this when executing mapFn.


// -----Return value:-------

// A new Array instance.




// ---------Array.from() lets you create Arrays from:--------

// array-like objects (objects with a length property and indexed elements); or
// iterable objects (objects such as Map and Set).
// Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.

// More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array, and mapFn only receives two arguments (element, index).

// Note: This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type.

// The length property of the from() method is 1.

// In ES2015, the class syntax allows sub-classing of both built-in and user-defined classes. As a result, static methods such as Array.from() are "inherited" by subclasses of Array, and create new instances of the subclass, not Array.


//EXAMPLES:--------

console.log(Array.from('foo'));

// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));

// expected output: Array [2, 4, 6]



// ARRAY FROM A SET-------------

const set = new Set(['foo','bar','baz','foo']);
console.log(Array.from(set));

// OUTPUT

// [foo','bar','baz']




// ARRAY FROM A MAP-------------

const map = new map([[1, 2], [2, 4], [4, 8]]);

console.log(Array.from(map));


// Output
// [[1, 2], [2, 4], [4, 8]]


const mapper = new map([['1', 'a'], ['2', 'b']]);

console.log(Array.from(mapper.values()));

// Output

// ['a', 'b']

console.log(Array.from(mapper.keys()));

// OUtput

// ['1', '2']


// ARRAY FROM A NODELIST---------------

// Create an array based on a property of DOM Elements

const images = document.getElementsByTagName('img');
const sources = Array.from(images,image => image.src);
const insecureSources = sources.filter(link => link.startsWith('http://'));


// ARRAY FROM AN ARRAY-LIKE OBJECT(ARGUMENTs)-------

function f(){
    return Array.from(arguments);
}
f(1,2,3);

// ------output-------

// [1,2,3]


// USING ARROW FUNCTIONS AND ARRAY.FROM()

// Using an arrow function as the map function to

// manipulate the elements


console.log(Array.from([1, 2, 3], x => x + x));


// -----output-------

// [2, 4, 6]

// Generate a sequence of numbers

// Since the array is initialized with `undefined` on each position,

// the value of `v` below will be `undefined`


console.log(Array.from({length: 5}, (v, i) => i));

// ------output----------

// [0, 1, 2, 3, 4]





// -------SEQUENCE GENERATOR (RANGE)--------


// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)


const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));


// Generate numbers range 0..4

console.log(range(0, 4, 1));



// -------output---------

// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2

console.log(range(1, 10, 2));



// --------output-----------

// [1, 3, 5, 7, 9]




// Generate the alphabet using Array.from making use of it being ordered as a sequence


console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)));



//------------- output----------------


// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


