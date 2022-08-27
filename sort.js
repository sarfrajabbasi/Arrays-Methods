// ------------sort method--------------


// sort mehtod  sort krta h array ma place or rakhe  elements ko

// defoult sort order ascending ma hota h

// uilt upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation


// -----------SYNTAX----------

// Functionless
// sort()

// // Arrow function
// sort((a, b) => { /* ... */ } )

// // Compare function
// sort(compareFn)

// // Inline compare function
// sort(function compareFn(a, b) { /* ... */ })


// --------PARAMETER---------

// compareFn Optional

// Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

// a
// The first element for comparison.

// b
// The second element for comparison.




// --------------Return value--------------
// The sorted array. Note that the array is sorted in place, and no copy is made.


//------------ Description------------


// If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.

//  For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.


// ------------EXAMPLE------------

function compare(a, b) {
    if (a<b ) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }


  
  console.log(compare(1,2))
  console.log(compare(2,2))
  console.log(compare(3,2))
  
  //   -------------OUTPUT------

// -1
// 0
// 1


const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// -----------OUTPUT-----------

// [1, 2, 3, 4, 5]

// -----------Arrays of objects can be sorted by comparing the value of one of their properties-----------

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(items)


// --------OUTPUT---------


// 0:{name: 'And', value: 45}
// 1: {name: 'Edward', value: 21}
// 2: {name: 'Magnetic', value: 13}
// 3: {name: 'Sharpe', value: 37}
// 4: {name: 'The', value: -12}
// 5: {name: 'Zeros', value: 37}


// -----Creating, displaying, and sorting an array----------

// The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.

let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log(stringArray.join()); // 'Blue,Humpback,Beluga'
console.log(stringArray.sort()); // ['Beluga', 'Blue', 'Humpback']
console.log(numberArray.join()); // '40,1,5,200'
console.log(numberArray.sort()); // [1, 200, 40, 5]
console.log(numberArray.sort(compareNumbers)); // [1, 5, 40, 200]

console.log(numericStringArray.join()); // '80,9,700'
console.log(numericStringArray.sort()); // [700, 80, 9]
console.log(numericStringArray.sort(compareNumbers)); // [9, 80, 700]

console.log(mixedNumericArray.join()); // '80,9,700,40,1,5,200'
console.log(mixedNumericArray.sort()); // [1, 200, 40, 5, '700', '80', '9']
console.log(mixedNumericArray.sort(compareNumbers)); // [1, 5, '9', 40, '80', 200, '700']



// -------Sorting non-ASCII characters------

// For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.localeCompare. This function can compare those characters so they appear in the right order.

const items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});



// --------OUTPUT--------

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']


// --------Sorting with map----------

// The compareFunction can be invoked multiple times per element within the array. Depending on the compareFunction's nature, this may yield a high overhead. 
// The more work a compareFunction does and the more elements there are to sort, it may be more efficient to use map for sorting. The idea is to traverse the array once to extract the actual values used for sorting into a temporary array, sort the temporary array, and then traverse the temporary array to achieve the right order.

// the array to be sorted
const data = ['delta', 'alpha', 'charlie', 'bravo'];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
})

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map(v => data[v.i]);

console.log(result);

// -------OUTPUT----------

// There is an open source library available called mapsort which applies this approach.



// ---------Sort stability--------

// Since version 10 (or EcmaScript 2019), the specification dictates that Array.prototype.sort is stable.

// For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:

const students = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 }
];

// After sorting this array by grade in ascending order:

students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);

// The students variable will then have the following value:

[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Alex",   grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }  // original maintained for similar grade (stable sorting)
];

// It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

// Before version 10 (or EcmaScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:

[
  { name: "Eagle",  grade: 13 },
  { name: "Sam",    grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex",   grade: 15 }  // original order not maintained
];


