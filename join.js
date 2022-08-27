//--------- Array.prototype.JOIN-------->>>>

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. 

// If the array has only one item, then that item will be returned without using the separator.

// The string conversions of all array elements are joined into one string.

// Warning: If an element is undefined, null or an empty array [], it is converted to an empty string.



// ------------SYNTAX--------

// join()
// join(separator)



// --------PARAMETER-----------

// separator Optional

// Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. 

// If omitted, the array elements are separated with a comma (","). 

// If separator is an empty string, all elements are joined without any characters in between them.



// ----------Return value---------

// A string with all array elements joined. If arr.length is 0, the empty string is returned.





// ---------EXAMPLE------------


const elements = ['this', 'is', 'business'];

console.log(elements.join());

console.log(elements.join(''));

console.log(elements.join('-'));





// ---------OUTPUT----------


// expected output: "this, is, business"

// expected output: "thisisbusiness"

// expected output: "this-is-business"




// ----------Joining an array four different ways-----------

// creates an array, a, with three elements, then joins the array four times: using the default separator, then a comma and a space, then a plus and an empty string.



var a = ['one', 'two', 'three'];

console.log(a.join());
console.log(a.join(', '));
console.log(a.join('+'));
console.log(a.join(''));




// -------OUTPUT----------

// 'one,two,three'
// 'one, two, three'
// 'one + two + three'
// 'onetwothree'



// ----------Joining an array-like object-----------

function f(a, b, c) {
    var s = Array.prototype.join.call(arguments);
    console.log(s); // '99,abcd,true'
  }

  console.log(f(999, 'abcd', true));




// -----OUTPUT-------------

  //"999,abcd,true"

