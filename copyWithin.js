// Array.prototype.copyWithin

// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.


// Syntax
// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)


// Parameters:-

// (target)

// Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.

// If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.

// (start Optional)

// Zero-based index at which to start copying elements from. If negative, start will be counted from the end.

// If start is omitted, copyWithin will copy from index 0.

// (end Optional)

// Zero-based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end.

// If end is omitted, copyWithin will copy until the last index (default to arr.length).

// (Return value)

// The modified array.

const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]


var arr =[1,2,3,4,5];

console.log(arr.copyWithin(-1));//[1, 2, 3, 4, 1]

console.log(arr.copyWithin(0,3));//[4, 1, 3, 4, 1]

console.log(arr.copyWithin(0,3,4));//[4, 1, 3, 4, 1]

console.log(arr.copyWithin(-2,-3,-1));//[4, 1, 3, 3, 4]

console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));//{0: 1, 3: 1, length: 5}



var i32a = new Int32Array([1,2,3,4,5])

console.log(i32a.copyWithin(0,2))// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
console.log([].copyWithin.call(new Int32Array([1,2,3,4,5]),0,3,4))// Int32Array [4, 2, 3, 4, 5]