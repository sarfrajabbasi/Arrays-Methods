// --------Array.prototype.lastIndexOf()--------

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// lastIndexOf compares searchElement to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).



// ---------Parameters----------

// searchElement
// Element to locate in the array.


// fromIndex Optional
// The position in the array at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), causing the whole array to be searched.

// A fromIndex value greater than or equal to the length of the array also causes the whole array to be searched. 

// A fromIndex value greater than 0 is taken as the offset from the beginning of the array.

// A fromIndex value less than 0 is taken as the offset from the end of the array — in other words, it is taken as specifying the position at array.length + fromIndex. Therefore, if array.length + fromIndex is less than 0, the array is not searched, and the method returns -1.




// ---------Return value-------

// The last index of the element in the array; -1 if not found.






// -------EXAMPLE----------->>


const animals = ['Lion', 'Tiger', 'panther', 'Lion'];

console.log(animals.lastIndexOf('Lion'));

console.log(animals.lastIndexOf('Tiger'));


// ------------OUTPUT---------->>

// output: 3
// output: 1




//----------- Using lastIndexOf---------->>

// uses lastIndexOf to locate values in an array.

var numbers = [2, 5, 9, 2];


console.log(numbers.lastIndexOf(2));   
console.log(numbers.lastIndexOf(7));     
console.log(numbers.lastIndexOf(2, 3));  
console.log(numbers.lastIndexOf(2, 2));  
console.log(numbers.lastIndexOf(2, -2)); 
console.log(numbers.lastIndexOf(2, -1)); 



// -----------OUTPUT------------->

// OUTPUT :- 3
// OUTPUT :- -1
// OUTPUT :- 3
// OUTPUT :- 0
// OUTPUT :- 0
// OUTPUT :- 3



// -------------Finding all the occurrences of an element--------------->>

// uses lastIndexOf to find all the indices of an element in a given array, using push to add them to another array as they are found.

var indices = [];

var array = ['a', 'b', 'a', 'c', 'a', 'd'];

var element = 'a';

var idx = array.lastIndexOf(element);

while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);



// ------------OUTPUT-----------

// [4, 2, 0]

// Note :- that we have to handle the case idx == 0 separately here because the element will always be found regardless of the fromIndex parameter if it is the first element of the array. This is different from the indexOf method.

