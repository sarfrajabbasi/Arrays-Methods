// Array.prototype.forEach

// The forEach() method executes a provided function once for each array element.


// -----RULES TO REMEBER----

// Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn.

// if existing elements of the array are changed or deleted, their value as passed to callbackFn will be the value at the time forEach() visits them.

// elements that are deleted before being visited are not visited. 

// If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped.

// forEach() executes the callbackFn function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable.
// orEach() does not mutate the array on which it is called.






// NOTE: There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.


//---- Early termination may be accomplished with:------

// A simple for loop
// A for...of / for...in loops
// Array.prototype.every()
// Array.prototype.some()
// Array.prototype.find()
// Array.prototype.findIndex()
// Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.



// ----SYNTAX----

// ----Arrow function----
// forEach((element) => { /* ... */ })
// forEach((element, index) => { /* ... */ })
// forEach((element, index, array) => { /* ... */ })

// ----Callback function----
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// -----Inline callback function------
// forEach(function(element) { /* ... */ })
// forEach(function(element, index) { /* ... */ })
// forEach(function(element, index, array){ /* ... */ })
// forEach(function(element, index, array) { /* ... */ }, thisArg)



// ---Parameters---

// callbackFn
// Function to execute on each element. It accepts between one and three arguments:

// element
// The current element being processed in the array.

// index Optional
// The index of element in the array.

// array Optional
// The array forEach() was called upon.

// thisArg Optional
// Value to use as this when executing callbackFn.



//--- Return value---

// undefined.




// -------Examples-------------------------------->

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// NOTE: forEach expects a synchronous function.----


// forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);


//-------- output---------

// Naively expected output: 14
// Actual output: 0



// ---No operation for uninitialized values (sparse arrays)---

//forEach() calls a provided callbackFn function once for each element in an array in ascending index order. It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

const arraySparse =[1,2,,5];
let numCallbackRuns = 0;

arraySparse.forEach(function(element){
    console.log(element)
    numCallbackRuns++

})
console.log("numCallbackRuns:",numCallbackRuns)

//--------output--------

// 1
// 2
// 5

// numCallbackRuns: 3

// the missing value between 2 and 5 didn't invoke callback function.




// -----CONVERTING  A FOR LOOP TO ForEach-----

const items = ['item1','item2','item3'];
const copyItems = [];
// before
for(let i = 0;i<items.length;i++){
    console.log(copyItems.push(items[i]))//1,2,3
} 
// after
items.forEach(function(item){
    console.log(copyItems.push(item))//4,5,6
})

//---------- output---------
// 1
// 2
// 3
// 4
// 5
// 6



// ------PRINTING THE CONTENTS OF AN ARRAY-----------

// NOTE:-In order to display the content of an array in the console, you can use console.table(), which prints a formatted version of the array.

// The following example illustrates an alternative approach, using forEach().



// The following code logs a line for each element in an array:

function logArrayEleElements(element,index,array){

    console.log('a['+index + '] = ' + element)// logs:
}

console.log([3,4,,7].forEach(logArrayEleElements))//undefined

// Notice that index 2 is skipped, since there is no item at
// that position in the array...


// -----output--------

// logs:
// a[0] = 3
// a[1] = 4
// a[3] = 7


// ---USING thisArg---

// The following (contrived) example updates an object's properties from each entry in the array:

function Counter(){
    this.sum = 0;
    this.count = 0;

}
Counter.prototype.add = function(array){
    array.forEach(function countEntry(entry){
        this.sum += entry;
        ++this.count;
    },this);
};

const obj = new Counter();
obj.add([2,5,9]);

console.log(obj.count);//3
console.log(obj.sum)//16

// -----output----------

// 3
// 16

// thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.

// NOTE : If passing the callback function used an arrow function expression, the thisArg parameter could be omitted, since all arrow functions lexically bind the this value.



// ---AN OBJECT COPY FUNCTION-----

// The following code creates a copy of a given object.

// There are different ways to create a copy of an object. The following is just one way and is presented to explain how Array.prototype.forEach() works by using ECMAScript 5 Object.* meta property functions.

const copy = (obj) => {
    const copy = Object.create(Object.getPrototypeOf(obj));
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach((name) => {
        const desc = Object.getOwnPropertyDescriptor(obj,name);
        Object.defineProperty(copy,name,desc);
    });
    return copy;
};
const obj1 = {a:1,b:2};

const obj2 = copy(obj1);

console.log(obj1);//{a: 1, b: 2}

console.log(obj2);//{a: 1, b: 2}

// ------output----------

// obj2 looks like obj1 now



// -----------MODIFYING THE ARRAY DURING ITERATION----------

// The following example logs one, two, four.

// When the entry containing the value two is reached, the first entry of the whole array is shifted off—resulting in all remaining entries moving up one position. 


// Because element four is now at an earlier position in the array, three will be skipped.

// forEach() does not make a copy of the array before iterating.

const words = ['one','two','three','four'];
words.forEach((word) =>{
    console.log(word);//one//two//four//three will be skipped.
    if(word === 'two'){
        words.shift();//'one' will delete from array
    }
})

console.log(words);

// ---------output---------

//['two','three','four']



// ------FLATTEN AN ARRAY-----------

const flatten = (arr) =>{
    const result = [];
    arr.forEach((i) => {
        if(Array.isArray(i)){
            result.push(...flatten(i));
        }else{
            result.push(i);
        }
    });
    return result;
}



const nested = [1,2,3,[4,5,[6,7],8,9]];

console.log(flatten(nested));

// -----------Output------------

//[1,2,3,4,5,6,7,8,9]

