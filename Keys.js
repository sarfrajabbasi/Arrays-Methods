// --------Array.prototype.keys---------

// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.




// -------Syntax----------

// keys()





// ---------Return value-------

// A new Array iterator object.






// ---------EXAMPLE----------


const array1 = ['lost', 'found', 'again lose'];

const iterator = array1.keys();

for (const key of iterator) {

  console.log(key);
}



// -----OUTPUT--------

// output: 0
// output: 1
// output: 2






// -------Key iterator doesn't ignore holes--------


var arr = ['a', , 'c'];

var sparseKeys = Object.keys(arr);

var denseKeys = [...arr.keys()];

console.log(sparseKeys); 
console.log(denseKeys);  



// -----OUTPUT--------

// ['0', '2']
// [0, 1, 2]