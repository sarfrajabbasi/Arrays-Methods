// Array.prototype.find

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// Syntax
// // Arrow functionP
// find((element) => { /* ... */ } )
// find((element, index) => { /* ... */ } )
// find((element, index, array) => { /* ... */ } )

// // Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// // Inline callback function
// find(function(element) { /* ... */ })
// find(function(element, index) { /* ... */ })
// find(function(element, index, array){ /* ... */ })
// find(function(element, index, array) { /* ... */ }, thisArg)
// 


// Parameters

// callbackFn
// Function to execute on each value in the array, taking 3 arguments:

// element
// The current element in the array.

// index Optional
// The index (position) of the current element in the array.

// array Optional
// The array that find was called on.

// thisArg Optional
// Object to use as this inside callbackFn.



// Return value

// The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.



const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);//output: 12



// Example

// Find an object in an array by one of its properties

const inventory = [
    {name:'apples',quantity:2}, 
    {name:'bananas',quantity:0}, 
    {name:'cherries',quantity:5}
];
function ischerries(fruit){
    return fruit.name === 'cherries';
}
console.log(inventory.find(ischerries));//{name: 'cherries', quantity: 5}



// Using arrow function and destructuring

const inventory1 = [
    {name:'apples',quantity:2}, 
    {name:'bananas',quantity:0}, 
    {name:'cherries',quantity:5}

    
];

const result = inventory1.find(({name}) => name === 'cherries');
console.log(result)//{name: 'cherries', quantity: 5}



// Find a prime number in an array

function isPrime(element,index,array){
    let start = 2;
    while (start <= Math.sqrt(element)){
        if(element % start++ < 1){
            return false;
        }
    }
    return element >1;
}
console.log([4,6,8,12].find(isPrime));//undefined
console.log([4,5,8,12].find(isPrime));//5



// The following examples show that nonexistent and deleted elements are visited, and that the value passed to the callback is their value when visited:

const array = [0,1,,,,5,6];
array.find(function(value,index){
    console.log('visited index',index,'with value',value);
});
// visited index 0 with value 0
//  visited index 1 with value 1
//  visited index 2 with value undefined
//  visited index 3 with value undefined
//  visited index 4 with value undefined
//  visited index 5 with value 5
//  visited index 6 with value 6

array.find(function(value ,index){
    if(index===0){
        console.log('deleting array[5] with value',array[5]);
        delete array[5]
    }
    console.log('visited index',index ,'with value',array[5]);
})

// output
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6