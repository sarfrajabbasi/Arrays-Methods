// Array.prototype.filter

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.


// Syntax

// // Arrow function
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ } )

// // Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// // Inline callback function
// filter(function(element) { /* ... */ })
// filter(function(element, index) { /* ... */ })
// filter(function(element, index, array){ /* ... */ })
// filter(function(element, index, array) { /* ... */ }, thisArg)



// Parameters

// callbackFn
// Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

// It accepts three arguments:

// element
// The current element being processed in the array.

// indexOptional
// The index of the current element being processed in the array.

// arrayOptional
// The array on which filter() was called.

// thisArgOptional
// Value to use as this when executing callbackFn.



// Return value

// A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);// expected output: Array ["exuberant", "destruction", "present"]



// Filtering out all small values

function isBig(value){
  return value >=10;

}
let filtered = [12,5,8,130,44].filter(isBig)
console.log(filtered);// [12, 130, 44]


// Find all prime numbers in an array

// The following example returns all prime numbers in the array:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num){
  for (let i =2;num>i;i++){
    if(num % i == 0){
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime));// [2, 3, 5, 7, 11, 13]


// Filtering invalid entries from JSON

// The following example uses filter() to create a filtered json of all elements with non-zero, numeric id.

let arr = [
  {id:15},
  {id:-1},
  {id:0},
  {id:3},
  {id:12.2},
  {},
  {id:null},
  {id:NaN},
  {id:'undefined'},
]

let invalidEntries = 0;

function filterByID(item){
  if(Number.isFinite(item.id) && item.id !==0){
    return true
  }
  invalidEntries++
  return false;
}
let arrByID = arr.filter(filterByID)
console.log('Filtered Array\n',arrByID)


// output

// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]


console.log('Numberof Invalid Entries = ',invalidEntries)// Number of Invalid Entries = 5


// Searching in array

// Following example uses filter() to filter array content based on search criteria.

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// Filter array items based on search criteria (query)


function filterItems(arr,query){
  return arr.filter(function(el){
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
console.log(filterItems(fruits,'ap'))// ['apple', 'grapes']
console.log(filterItems(fruits,'an'))// ['banana', 'mango', 'orange']



// ES2015 Implementation

const fruits1 = ['apple', 'banana', 'grapes', 'mango', 'orange']

/* Filter array items based on search criteria (query) */

const filterItems1 = (arr,query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase())!==-1)
}
console.log(filterItems(fruits1,'ap')) //['apple', 'grapes']
console.log(filterItems(fruits1,'an')) // ['banana', 'mango', 'orange']



// # Affecting Initial Array (modifying, appending and deleting)

// The following examples tests the behavior of the filter method when the array is modified.

// Modifying each words

let words1 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWorlds = words1.filter((word,index,arr) => {
  arr[index+1] += 'extra'
  return word.length < 6
})
console.log(modifiedWorlds);



// output

// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]




// Appending new words
 const words2 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words2.filter( (word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)


// output

// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]




// Deleting words
const words3 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words3.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)


// output

// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// ["spray" ,"limit"]