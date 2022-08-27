// The reduce() method executes a user-supplied "reducer" callback function on each element of the array,


// in order, passing in the return value from the calculation on the preceding element. 


// The final result of running the reducer across all elements of the array is a single value.


// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. 

// Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

// he reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.


// -----------------SYNTAX----------------

// // Arrow function
// reduce((previousValue, currentValue) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)


// // Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)


// // Inline callback function
// reduce(function(previousValue, currentValue) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)



// -----PARAMETERS------------


// ----------callbackFn-------------

// -------A "reducer" function that takes four arguments:-----------

// previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

// currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

// currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

// array: the array to traverse.


// ---initialValue Optional---

// A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. 

// If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.


// ------------RETURN VALUE----------

// The value that results from running the "reducer" callback function to completion over the entire array.



// ----------EXCEPTIONS--------------

// -----TypeError------

// The array contains no elements and initialValue is not provided.




//------------- DESCRIPTION------------

// reduce() ma callbackfn 4 argument leta h ,reduce callback krta h as function for each element ,after the first element present inthe array ,in ascending order.


// first time callback is called, the PV and CV can be...

// agar IV de rakhi h thi jab reduce ko call kr rhe th tab PV equal hogi IV and CV equal hogi First value joh array m ha.

// agar IV nahi de rakhi toh,then PV equal to first value in array and CV equals to second value in array.

// agar array ke andar koi Element nahi ho toh woh TypeError count hogi

// reduce joh a directly mutate nahi krta jah or jish object ma usse call kiya h but woh object may be mutated by the calls to callbackfn.

// elements ki joh range ho woh reduce ma processed hone phele set ho 

// elements joh appended to array after the call to reduce begins woh visited nahi hoga by callbackfn

// or agar existing  Elements of  array are changed,joh unki value passed uhi thi pahele in callbackfn will be the value at the time reduce visits them.

// Elements that are deleted after the call to reduce begins and before being visited are not visited.

// agar array ke apas only one element(regardless of position) h and IV is bhi provide h or agr provided h but array empty h toh solo value will be return without calling callbackFn.

// agar IV provided h and array empty nahi h,then the reduce method will always invoke callbackFn starting at index 0.

// agr IV provided nahi h then reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as exmaple:-




// ------------EXAMPLE-------------

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError




//------------ How reduce() works without an initial value--------------

// if we call reduce() with an array and no initial value.

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);


// ------OUTPUT---------

// callback would be invoked four times

//  previous: 15, current: 16, index: 1, returns: 31
//  previous: 31, current: 17, index: 2, returns: 48
//  previous: 48, current: 18, index: 3, returns: 66
//  previous: 66, current: 19, index: 4, returns: 85
//  85
// The value returned by reduce() would be that of the last callback invocation (85).



// ------------How reduce() works with an initial value-----------

// we reduce the same array using the same algorithm, but with an initialValue of 10 passed the second argument to reduce():

console.log([15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 ))


// ------------OUTPUT------------

// The callback would be invoked five times

//  previous: 10, current: 15, index: 0, returns: 25
//  previous: 25, current: 16, index: 1, returns: 41
//  previous: 41, current: 17, index: 2, returns: 58
//  previous: 58, current: 18, index: 3, returns: 76
//  previous: 76, current: 19, index: 4, returns: 95
// 95
// The value returned by reduce() in this case would be 95.



// ------------Sum all the values of an array--------

let sum = [0,1,2,3].reduce(function(previousValue,currentValue){
    return previousValue + currentValue
},0)

// ------------OUTPUT-------------

// sum is 6



// ----With arrow function------------


let total = [0,1,2,3].reduce((previousValue,currentValue) => previousValue + currentValue,0);

// ------------OUTPUT-------------

// sum is 6



// -----------sum of values in an object array------------


let initialValue = 0;
let sum = [{x:1},{x:2},{x:3}].reduce(function(previousValue,currentValue){
    return previousValue + currentValue.x
},initialValue)

console.log(sum)


// ------------OUTPUT--------------

// logs 6

// ------With arrow-------

let initialValue = 0;
let sum = [{x:1},{x:2},{x:3}].reduce((previousValue,currentValue) =>
    previousValue + currentValue.x,initialValue)

console.log(sum)


// ------------OUTPUT--------------

// logs 6



// ---------------Flatten an array of arrays-------------

let Flattened =[[0,1],[2,3],[4,5]].reduce(function(previousValue,currentValue){
    return previousValue.concat(currentValue)
},[])
console.log(Flattened)

// ---------OUTPUT-------------

// flattened is [0, 1, 2, 3, 4, 5]



// -----with arrow-----------

let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( previousValue, currentValue ) => previousValue.concat(currentValue),[])

// ---------OUTPUT-------------

// flattened is [0, 1, 2, 3, 4, 5]




// -----------Counting instances of values in an object-------------


let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++
    }
    else {
      allNames[name] = 1
    }
    return allNames
  }, {})

console.log(countedNames)


// -------OUTPUT-------------

  // countedNames is:
  // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }




//   -------Grouping objects by a property-----------

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')

console.log(groupedPeople)


// ------OUTPUT----------

// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }



// -------------Bonding arrays contained in an array of objects using the spread operator and initialValue------------------


// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(previousValue, currentValue) {
    return [...previousValue, ...currentValue.books]
  }, ['Alphabet'])
  
console.log(allbooks);


//   ------------OUTPUT---------
  // allbooks = [
  //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
  //   'Romeo and Juliet', 'The Lord of the Rings',
  //   'The Shining'
  // ]


// ------------Remove duplicate items in an array---------


let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates);

// -----------OUTPUT-----------

// ['a', 'b', 'c', 'e', 'd']



// ----------Replace .filter().map() with .reduce()---------


// Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect while traversing only once with Array.

// reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with Array.forEach()).


const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); 


// ------OUTPUT---------

// [12, 4]


// -----------Running Promises in Sequence------------

/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
 function runPromiseInSequence(arr, input) {
    return arr.reduce(
      (promiseChain, currentFunction) => promiseChain.then(currentFunction),
      Promise.resolve(input)
    )
  }
  
  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 5)
    })
  }
  
  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 2)
    })
  }
  
  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
   return a * 3
  }
  
  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 4)
    })
  }
  
  const promiseArr = [p1, p2, f3, p4]
  runPromiseInSequence(promiseArr, 10)

    .then(console.log)   
    
// -------------OUTPUT------------

// 1200

// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined




// -----------Function composition enabling piping-------------

// Building-blocks to use for composition

const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality

const pipe = (...functions) => initialValue => functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
)

// Composed functions for multiplication of specific values

const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)


// Usage

multiply6(6)   
multiply9(9)  
multiply16(16) 
multiply24(10) 




// ------------OUTPUT----------

// 36
// 81
// 256
// 240



// ----------Write map using reduce------------

if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) 


// -------------OUTPUT-------------

// [5, 7, , 10]