// Array.prototype.concat()

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// SYNTAX:-

// concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, ... , valueN)


// PARAMETERS:-

// valueN Optional

// Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted(missed), concat returns a shallow copy of the existing array on which it is called.


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);// expected output: Array ["a", "b", "c", "d", "e", "f"]



// concatenating two Arrays

const letters = ['Array','object','class'];
const numbers1 = [1,2,3];
const alphaNumeric = letters.concat(numbers1);
console.log(alphaNumeric)//['Array', 'object', 'class', 1, 2, 3]



// Concatenating three arrays

const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];
const numbers = num1.concat(num2,num3);
console.log(numbers)//[1, 2, 3, 4, 5, 6, 7, 8, 9]



// Concatenating values to an array

const letters1 = ['a','b','c'];
const alphaNumeric1 = letters1.concat('sarfraj','abbbasi')
console.log(alphaNumeric1);//['a', 'b', 'c', 'sarfraj', 'abbbasi']



// Concatenating nested arrays

const n1 = [[1,[5,6]]];
const n2 = [2, [3,['sarfraj']]];
const number2 = n1.concat(n2);
console.log(number2);//[[1,[5,6]],2, [3,['sarfraj']]]
const console1 = n1[0].push(4);
console.log(number2);//[[1,[5,6],4],2, [3,['sarfraj']]]
