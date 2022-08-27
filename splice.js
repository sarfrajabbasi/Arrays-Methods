// -------SPLICE------------

// splice method change the content of an array by removing or replacing existing or adding new elements in AnimationPlaybackEvent.

// access part of an array without modiyfing it.

//---------Syntax------------

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)



// ---------Parameters-----------

// start
// The index at which to start changing the array.

// deleteCount Optional
// An integer indicating the number of elements in the array to remove from start.

// item1, item2, ... Optional
// The elements to add to the array, beginning from start.

// If you do not specify any elements, splice() will only remove elements from the array.

//------ Return value-----

// An array containing the deleted elements.

// If only one element is removed, an array of one element is returned.

// If no elements are removed, an empty array is returned.

// If the specified number of elements to insert differs from the number of elements being removed, the array's length will be changed.





// --------EXAMPLE-----------


// ------Remove 0 (zero) elements before index 2, and insert "drum"-----


var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var removed = myFish.splice(2, 0, 'drum')


// ----------OUTPUT------------

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed





//----------- Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"-----


var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var removed = myFish.splice(2, 0, 'drum', 'guitar')
  console.log(removed)

// ---------OUTPUT----------

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed




//------- Remove 1 element at index 3---------

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
var removed = myFish.splice(3, 1)

// ----------OUTPUT-----

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]





// Remove 1 element at index 2, and insert "trumpet"

var myFish = ['angel', 'clown', 'drum', 'sturgeon']
var removed = myFish.splice(2, 1, 'trumpet')

// ---------------OUTPUT------------

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]






//------- Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"------------

var myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')


// -----------OUTPUT------------

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]


// ----------Remove 2 elements, starting from index 2---------

var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
var removed = myFish.splice(2, 2)

// --------------OUTPUT-------------

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]





// ----------Remove 1 element from index -2----------

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var removed = myFish.splice(-2, 1)

// --------------OUTPUT-----------

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]



// ------------Remove all elements, starting from index 2----------

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var removed = myFish.splice(2)



// -------------OUTPUT-----------

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]



