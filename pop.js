// --------pop()----------
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array{"pop method last element ko remove krta h array ma se and return kr deta h element ko "}


// --------SYNTAX----------

// pop()

// ------RETURN--------

// return remove array element or undefined if the array is empty
// call carne pr return value show krta h 

// this method can be called or applied to objects resembling arrays.

// Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.



// ------------EXAMPLE----------

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

console.log(plants);

plants.pop();// return : "kale"

console.log(plants);


// ------------OUTPUT-------------

//  "tomato"

// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// expected output: Array ["broccoli", "cauliflower", "cabbage"]



//------------ Removing the last element of an array------------

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const popped = myFish.pop();


console.log(myFish); 
console.log(popped); 



// ------OUTPUT-------------

// ['angel', 'clown', 'mandarin' ]

// 'sturgeon'



// ----------Using apply( ) or call ( ) on array-like objects----------

// myFish array-like object containing four elements and a length parameter, then removes its last element and decrements the length parameter.

const MyFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

const APopped = Array.prototype.pop.call(MyFish); //same for apply() 

console.log(MyFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(APopped); // 'sturgeon'




//-------- Using an object in an array-like fashion-----------

// Note that in this example, we don't create an array to store a collection of objects. Instead, we store the collection on the object itself and use call on Array.prototype.push and Array.prototype.pop to trick those methods into thinking we're dealing with an array.

 const collection  = {
     length  : 0,
     addElements: function(...elements){
        //  obj.length will be incremented automatically
        //  every time an element is added
        // Returning what push returns; that is
        // the new value of length property.
        return [].push.call(this,...elements);
     },
     removeElements: function(){
        //  obj.length will be decremented automatically
        // every time an element is removed.
        // Returing what pop returns ; that is 
        // the removed element.
        return [].pop.call(this);
     }


}     

collection.addElements(10,20,30);

console.log(collection.length); //3

collection.removeElements();

console.log(collection.length);//2