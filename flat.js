// -----------------Array.prototype.flat----------------

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.



// -----------------Syntax--------------------

// flat()
// flat(depth)



// ---------------Parameters----------------------

// depth Optional
// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

// Return value
// A new array with the sub-array elements concatenated into it.




// --------------Alternatives-------------

// ----------------reduce and concat-------------------

const arr = [1,2,3,[4,5]];
console.log(arr.flat());//[1, 2, 3, 4, 5]

arr.reduce((acc,val) => acc.concat(val),[]);
console.log(arr);//[1,2,3,[4,5]]

const flattend = arr => [].concat(...arr);
console.log(flattend)




// -----------reduce + concat + isArray + recursivity-----------------

const ar =[1,2,[3,4,[5,6]]];
function flatDeep(ar,d=1){
    return d > 0 ? ar.reduce((acc,val) => acc.concat(Array.isArray(val)? flatDeep(val,d-1) : val),[])
    :ar.slice();
}

console.log(flatDeep(ar,Infinity))// [1, 2, 3, 4, 5, 6]





// -------------Use a stack----------------

// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      // pop value from stack
      const next = stack.pop();
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
  }
  
  const arrayy = [1, 2, [3, 4, [5, 6]]];
  console.log(flatten(arrayy));
  // [1, 2, 3, 4, 5, 6]




// -------------Use Generator function-----------------

function* flatten(array,depth){
    if(depth === undefined){
        depth =1;
    }
    for(const item of array){
        if(Array.isArray(item) && depth >0){
            yield* flatten(item ,depth-1);
        }else{
            yield item;
        }
    }
}
const arr3 = [1,2,[3,4,[5,6]]];
const flatten1 =[...flatten(arr3,Infinity)];
console.log(flatten1);// [1, 2, 3, 4, 5, 6]



//----------- Examples---------------

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());// expected output: [0, 1, 2, 3, 4]

const array = [0, 1, 2, [[[3, 4]]]];

console.log(array.flat(4));// expected output: [0, 1, 2, [3, 4]]


// -----------Flattening nested arrays------------

const arr4 =[1,2,[3,4]];

console.log(arr4.flat());
const arr21 = [1, 2, [3, 4, [5, 6]]];
console.log(arr21.flat());
// [1, 2, 3, 4, [5, 6]]

const arr31 = [1, 2, [3, 4, [5, 6]]];
console.log(arr31.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr41 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr41.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// ----------Flattening and array holes----------------

const arr51 = [1,2,,4,5];

console.log(arr51.flat());// [1, 2, 4, 5]