// Array.prototype.entries

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.


// Syntax
// entries()


// Return value
// A new Array iterator object.


// Iterating with index and element

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);// expected output: Array [0, "a"]

console.log(iterator1.next().value);// expected output: Array [1, "b"]

console.log(iterator1.next().value);// expected output: Array [2, "c"]


const a = ['a','b','c','d'];

const asa = a.entries()

console.log(asa.next().value);//[0,'a']
console.log(asa.next().value);//[1,'b']
console.log(asa.next().value);//[2,'c']
console.log(asa.next().value);//[3,'d']




// Using a for…of loop


const b = ['loading','unoading','stop','not right'];

for (const[index,Element] of b.entries())
console.log(index,Element);

// Output

//  [0 'loading']
//  [1 'unoading']
//  [2 'stop']
//  [3 'not right']


var sa = ['hold','take','give it'];
var iterator = sa.entries();
for ( let e of iterator){
  console.log(e)
}

//Output

// [0, 'hold']
// [1, 'take']
// [2, 'give it']