// Array.prototype.length:--------


// The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.



// Description:----
// The value of the length property is an integer with a positive sign and a value less than 2 to the 32nd power (2^32).


var namelistA = new Array(4294967296); //2 to the 32nd power = 4294967296
console.log(namelistA.length); //RangeError: Invalid array length

var namelistA = new Array(4294967296-1); //2 to the 32nd power = 4294967296
console.log(namelistA.length); //4294967295

var namelistC = new Array(-100) //negative sign
console.log(namelistC.length); //RangeError: Invalid array length

var namelistC = new Array(-100+100) //negative sign
console.log(namelistC.length); //0



var namelistB = [];
namelistB.length = Math.pow(2,32)-1; //set array length less than 2 to the 32nd power
console.log(namelistB.length);//4294967295


// You can set the length property to truncate an array at any time

const arr = [1, 2,3,4];
console.log(arr);// [ 1, 2,3,4]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);// [ 1, 2, <3 empty items> ]


arr.forEach(element => console.log(element));// 1 //2


// Examples:----


// Iterating over an array

var number = [1,2,3,4,5];
var length = number.length;
for(var i= 0;i<length; i++){
  number[i]*=2;

}// numbers is now [2, 4, 6, 8, 10]




// Shortening an array

var number = [1,2,3,4,5];
if(number.length >3){
  number.length = 3;
}

console.log(number);//[1,2,3]

console.log(number.length);//3



// Create empty array of fixed length

var number = [];
number.length = 3;
console.log(number);// [undefined, undefined, undefined]

