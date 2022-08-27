// Array.prototype.findIndex

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.


// Examples

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));// expected output: 3




// Find the index of a prime number in an array

// The following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.

function isPrime(num){
    for (let i = 2;num >i;i++){
        if(num % i == 0){
            return false;
        }
    }
    return num >1;
}
console.log([4,6,8,9,12].findIndex(isPrime));//-1
console.log([4,6,7,9,12].findIndex(isPrime));// index : 2



// Find index using arrow function
// The following example finds the index of a fruit using an arrow function:

const fruits = ['apple','banana','cantaloupe','blueberries','grape'];

const  index = fruits.findIndex(fruit => fruit==='blueberries');
console.log(index)//3
console.log(fruits[index])//blueberries