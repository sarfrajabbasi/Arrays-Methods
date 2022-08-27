// ------------Array.prototype.push()-----------

// The push() method adds one or more elements to the end of an array and returns the new length of the array.


// ----------SYNTAX----------

// push(element0)
// push(element0, element1)
// push(element0, element1, /* ... ,*/ elementN)


// ----------PARAMETERS------------------

// elementN
// The element(s) to add to the end of the array.



// -----------Return value--------------

// The new length property of the object upon which the method was called.







// ----------Examples-----------------

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);


// -------------OUTPUT-------------

// expected output: 4
// expected output: Array ["pigs", "goats", "sheep", "cows"]
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


//---------- Adding elements to an array-------------

let sports  = ['soccer','baseball'];
let total = sports.push('football','swimming')


console.log(sports);
console.log(total)


// --------OUTPUT------------

// ['soccer','baseball','football','swimming'];
// 4



// ------------Merging two arrays------------


// uses spread syntax to push all elements from a second array into the first one.



let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

//  Merge the second array into the first one
vegetables.push(...moreVegs);

console.log(vegetables);


// ---------------OUTPUT--------

//  ['parsnip', 'potato', 'celery', 'beetroot']

// "also be done with the concat() method."






// ------------Using an object in an array-like fashion------------


let obj ={
    length:0,


    addElem:function addElem(elem){
        // obj.lengthis automatically incremented
        // every time an element is added.
        [].push.call(this,elem)
    }
}

// let's add some empty objects just to illustrate.

obj.addElem({})
obj.addElem('sarfraj')
console.log(obj.addElem('sarfraj'))

console.log(obj.length)


// -------------OUTPUT----------------

// 2


// Note :----that although obj is not an array, the method push successfully incremented obj's length property just like if we were dealing with an actual array.

