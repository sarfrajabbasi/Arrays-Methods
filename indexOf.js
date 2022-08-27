// ------Array.prototype.indexOf---------

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).

// Note: For the String method, see String.prototype.indexOf().


// ----SYNTAX----------

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)



//------- Parameters-----------


// searchElement

// Element to locate in the array.

// fromIndex Optional

// The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).


// --------Return value-----------

// The first index of the element in the array; -1 if not found.


// ---------EXAMPLES---------------

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1




// --------Using indexOf()------------

// The following example uses indexOf() to locate values in an array.


var array = [2, 9, 9];

console.log(array.indexOf(2));
console.log(array.indexOf(7));
console.log(array.indexOf(9, 2));
console.log(array.indexOf(2, -1));
console.log(array.indexOf(2, -3));

// ----OUTPUT-----

// 0
// -1
// 2
// -1
// 0


// ---------Finding all the occurrences of an element-----------


var indices = [];

var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);



// -----OUTPUT------

// [0, 2, 4]




// -----Finding if an element exists in the array or not and updating the array---------


function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

console.log(updateVegetablesCollection(veggies, 'spinach'));
console.log(updateVegetablesCollection(veggies, 'spinach'));



// ------OUTPUT--------

// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
// spinach already exists in the veggies collection.
