// Array.prototype.fill

// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// Syntax

// fill(value)
// fill(value, start)
// fill(value, start, end)


// Parameters

// value
// Value to fill the array with. (Note all elements in the array will be this exact value.)

// start Optional
// Start index (inclusive), default 0.

// end Optional
// End index (exclusive), default arr.length.


// Return value

// The modified array, filled with value.


const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));// expected output: [1, 2, 0, 0]


// fill with 5 from position 1
console.log(array1.fill(5, 1));// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));// expected output: [6, 6, 6, 6]



// Using fill
console.log([1,2,3].fill(4));//[4,4,4]
console.log([1,2,3].fill(4));//[4,4,4]
console.log([1,2,3].fill(4,1));//[1,4,4]
console.log([1,2,3].fill(4,1,2));//[1,4,3]
console.log([1,2,3].fill(4,1,1));//[1,2,3]
console.log([1,2,3].fill(4,3,3));//[1,2,3]
console.log([1,2,3].fill(4,-3,-2));//[4,2,3]
console.log([1,2,3].fill(4,NaN,NaN));//[1,2,3]
console.log([1,2,3].fill(4,3,5));//[1,2,3]
console.log(Array(3).fill(4));//[4,4,4]
console.log([].fill.call({length:3},4));//{0: 4, 1: 4, 2: 4, length: 3}

let arr = Array(3).fill({})
console.log(arr);
arr[0].hi = 'helloWorld';

//output

// 0: {hi: 'helloWorld'}
// 1: {hi: 'helloWorld'}
// 2: {hi: 'helloWorld'}



// Using fill() to create a matrix of all 1

const arr1  = new Array(3);
for (let i = 0; i<arr1.length;i++){
  arr1[i] = new Array(4).fill(1)
}
arr1[0][0]=10;
console.log(arr1);

//output
// 0: (4) [10, 1, 1, 1]
// 1: (4) [1, 1, 1, 1]
// 2: (4) [1, 1, 1, 1]

console.log(arr1[0][0]);//10
console.log(arr1[1][0]);//1
console.log(arr1[2][0]);//1


// Using fill() to populate an empty array

let tempGirls =Array(5).fill('girl',0)
console.log(tempGirls);//['girl', 'girl', 'girl', 'girl', 'girl']