// -----------Array.prototype.shift()-----------

// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.

// shift is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

// Array.prototype.pop() has similar behavior to shift, but applied to the last element in an array.



// -----------Syntax----------
// shift()



// ---------Return value------------
// The removed element from the array; undefined if the array is empty.



// -------------EXAMPLE-------------


const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


// -----------Removing an element from an array-------------

// The following code displays the myFish array before and after removing its first element. It also displays the removed element:

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after:', myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element:', shifted);
// Removed this element: angel




//--------- Using shift() method in while loop------------

// The shift() method is often used in condition inside while loop. In the following example every iteration will remove the next element from an array, until it is empty:

var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( typeof (i = names.shift()) !== 'undefined' ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John