// ----------VALUES----------

// The values() method returns a new array iterator object that contains the values for each index in the array.


// --------Syntax------------

values()


// ----------Return value-------------

A new Array iterator object.


// ---------EXAAMPLE-----------


// --------Iteration using for...of loop-----------

const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"


// Array.prototype.values is default implementation of Array.prototype[Symbol.iterator].

// Array.prototype.values === Array.prototype[Symbol.iterator]      //true





// -----------Iteration using .next()--------------

const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
iterator.next();               // Object { value: "a", done: false }
iterator.next().value;         // "b"
iterator.next()["value"];      // "c"
iterator.next();               // Object { value: "d", done: false }
iterator.next();               // Object { value: "e", done: false }
iterator.next();               // Object { value: undefined, done: true }
iterator.next().value;         // undefined 



const arr = ['a', 'b', 'c', 'd', 'e'];
 const iterator = arr.values();
 for (let letter of iterator) {
 console.log(letter);
} //"a" "b" "c" "d" "e"
for (let letter of iterator) {
console.log(letter);
} // undefined


// reason: When next().done=true or currentIndex>length the for..of loop ends. See Iteration protocols.

// Value: there are no values stored in the array Iterator object; instead it stores the address of the array used in its creation and so depends on the values stored in that array.

const arr = ['a', 'b', 'c', 'd', 'e'];
const iterator = arr.values();
console.log(iterator);        // Array Iterator {  }
iterator.next().value;        // "a"
arr[1]='n';
iterator.next().value;        //  "n"


