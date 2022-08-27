// Array.prototype [@@iterator]

// The @@iterator method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.The initial value of the @@iterator property is the same function object as the initial value of the values() property.

// SYNTAX

// [Symbol.iterator]

// RETURN VALUE
// The initial value given by the values() iterator. By default, using Arr[Symbol.iterator] will return the values() function.



// Examples:-------

// Iteration using for...of loop

const Arr = ['radeon','Nvidia','Intel'];
const Earr = Arr[Symbol.iterator]();
const letterResult = document.getElementById('letterResult');
for(let letter of Earr){
  const li = document.createElement('LI');
  li.textContent=letter;
  letterResult.appendChild(li);
} 

// Alternative iteration

var arr = ['cat','dog','cow','tiger','elepant','crockodile'];
var eArr = arr[Symbol.iterator]()
console.log(eArr.next().value);//cat
console.log(eArr.next().value);//dog
console.log(eArr.next().value);//cow
console.log(eArr.next().value);//tiger
console.log(eArr.next().value);//elepant
console.log(eArr.next().value);//crockodile



// Use Case for brace notation

function logIterable(it){
  if(!(Symbol.iterator in Object.getPrototypeOf(it))){
    console.log(it,'is not an itreable object');
  }
  var iterator = it[Symbol.iterator]();

for(let letter of iterator){
  console.log(letter);

}

}

logIterable(['sarfraj','abbasi','1254']);//sarfraj,abbasi,1254
logIterable(['sarfraj']);//sarfraj
logIterable(['1235']);//1235
logIterable(1235);//1235 is not an itreable object


