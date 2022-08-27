// -------------Array.prototype.reverse()-----------

// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

// reverse is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.



// ----------Syntax-------------
// reverse()



// ----------Return value--------
// The reversed array.



// ----------EXAMPLE---------------


const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]



//-----------------Reversing the elements in an array----------

// creates an array items, containing three elements, then reverses the array. The call to reverse() returns a reference to the reversed array items.

const items = [1, 2, 3];
console.log(items); 

items.reverse();
console.log(items); 


// ------OUTPUT--------

// [1, 2, 3]
// [3, 2, 1]


// -----------Reversing the elements in an array-like object--------------

// creates an array-like object obj, containing three elements and a length property, then reverses the array-like object. The call to reverse() returns a reference to the reversed array-like object obj.

const obj = {0: 1, 1: 2, 2: 3, length: 3};
console.log(obj); 

Array.prototype.reverse.call(obj); //same syntax for using apply()
console.log(obj); 



// -------------OUTPUT-----------

// {0: 1, 1: 2, 2: 3, length: 3}
// {0: 3, 1: 2, 2: 1, length: 3}



