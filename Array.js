// Array :----

// The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

// Description:---

// Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.

// Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.




// Common operations


// Create an Array

let Phone = ['Oneplus', 'Realme']

console.log(Phone.length)//2



// Access an Array Value using the i position



let first = Phone[0]
console.log(first)// Oneplus

let last = Phone[Phone.length - 1]
console.log(last);// Realme



// Loop over an Array

Phone.forEach(function(Value, i, array) {
  console.log(Value, i, array)
})
// Oneplus 0
// Realme 1



// Add an Value to the end of an Array

let newLength = Phone.push('Vivo')
console.log(newLength)// ["Oneplus", "Realme", "Vivo"]



// Remove an Value from the end of an Array

let last1 = Phone.pop() // remove ViVo (from the end)
// ["Oneplus", "Realme"]



// Remove an Value from the beginning of an Array

let first1 = Phone.shift() // remove Oneplus from the front
// ["Realme"]




// Add an Value to the beginning of an Array

let newLength1 = Phone.unshift('samsung') // add to the front
// ["Samsung", "Realme"]



// Find the i of an Value in the Array

Phone.push('MI MAx')
// ["Samsung", "Realme", "MI MAx"]

let pos1 = Phone.indexOf('Realme')// 1



// Remove an Value by i position

let removedItem = Phone.splice(pos1, 1) // this is how to remove an Value

// ["Samsung", "MI MAx"]






// Remove items from an i position

let country = ['America', 'Ukraine', 'Russia', 'UK']
console.log(country)// ["America", "Ukraine", "Russia", "UK"]

let pos = 1
let n = 2

let removedItems = country.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,

// starting at the i position specified by pos and progressing toward the end of array.

console.log(country)// ["America", "UK"] (the original array is changed)

console.log(removedItems)// ["Ukraine", "Russia"]



// Copy an Array

let shallowCopy = Phone.slice() // this is how to make a copy
console.log(Phone)// ["Samsung", "MI MAx"]




// Accessing Array Elements:-----

// JavaScript arrays are zero-indexed. The first element of an array is at index 0, and the last element is at the index value equal to the value of the array's length property minus 1.

// Using an invalid index number returns undefined.

let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'

// Array elements are object properties in the same way that toString is a property (to be specific, however, toString() is a method). Nevertheless, trying to access an element of an array as follows throws a syntax error because the property name is not valid:

// console.log(arr.0) // a syntax error

// There is nothing special about JavaScript arrays and the properties that cause this. JavaScript properties "that begin with a digit" cannot be referenced with dot notation and must be accessed using bracket notation.

// For example, if you had an object with a property named 3d, it can only be referenced using bracket notation.



let color = ['orange', 'black', 'brown', 'Yellow', 'green','blue', 'red']
// console.log(color.0)   // a syntax error
console.log(color[6])  // works properly

// renderer.3d.setTexture(model, 'character.png')     // a syntax error

// renderer['3d'].setTexture(model, 'character.png')  // works properly

// In the 3d example, '3d' had to be quoted (because it begins with a digit). But it's also possible to quote the array indexes as well (e.g., color['2'] instead of color[2]), although it's not necessary.

// The 2 in color[2] is coerced into a string by the JavaScript engine through an implicit toString conversion. As a result, '2' and '02' would refer to two different slots on the color object, and the following example could be true:

console.log(color['2'] != color['02'])




// Relationship between length and numerical properties:--

// A JavaScript array's length property and numerical properties are connected.

// Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called.

// Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.






const fruits = []
fruits.push('Coka-cola', 'pepsi', 'Sprite')

console.log(fruits.length) // 3

// When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property accordingly:

fruits[5] = 'FruitBeer'
console.log(fruits[5])            // 'Fruitbeer'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6


// Increasing the length.

fruits.length = 10
console.log(fruits)// ['Coka-cola', 'apple', 'peach', empty x 2, 'Fruitbeer', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])// undefined



// Decreasing the length property does, however, delete elements.

fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)// 2


// This is explained further on the Array.length page.



// Creating an array using the result of a match:----

// The result of a match between a RegExp and a string can create a JavaScript array. This array has properties and elements which provide information about the match. Such an array is returned by RegExp.exec() and String.match().

// To help explain these properties and elements, see this example and then refer to the table below:

// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /a(b+)(d)/i
const myArray = myRe.exec('aaabbdBBCccDDddd')
console.log(myArray)





// Examples:------




// Creating an array

// The following example creates an array, msgArray, with a length of 0, then assigns values to msgArray[0] and msgArray[99], changing the length of the array to 100.

let msgArray = []
msgArray[0] = 'Holaaa'
msgArray[99] = 'Universe'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}






// Creating a two-dimensional array

// The following creates a chessboard as a two-dimensional array of strings. The first move is made by copying the 'p' in board[6][4] to board[4][4]. The old position at [6][5] is made blank.

let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ]

console.log(board.join('\n') + '\n\n')





// Move King's Pawn forward 2
board[4][5] = board[6][5]
board[6][5] = ' '
console.log(board.join('\n'))

// output:

// R,N,B,Q,K,B,N,R
// P,P,P,P,P,P,P,P
//  , , , , , , ,
//  , , , , , , ,
//  , , , , , , ,
//  , , , , , , ,
// p,p,p,p,p,p,p,p
// r,n,b,q,k,b,n,r

// R,N,B,Q,K,B,N,R
// P,P,P,P,P,P,P,P
//  , , , , , , ,
//  , , , , , , ,
//  , , , ,p, , ,
//  , , , , , , ,
// p,p,p,p, ,p,p,p
// r,n,b,q,k,b,n,r



// Using an array to tabulate a set of values
values = []
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values)

// Results (output)

// The first column is the index
// 0	1	0
// 1	2	2
// 2	4	8
// 3	8	18
// 4	16	32
// 5	32	50
// 6	64	72
// 7	128	98
// 8	256	128
// 9	512	162

