// get Array[@@species]

// The Array[@@species] accessor property returns the Array constructor.


// Syntax :-

// Array[Symbol.species]



// Return value :-

// the default constructor for Array objects
// Subclass constructors may override it to change the constructor assignment.



// Examples:-

// Species in ordinary objects

// The species property returns the default constructor function, which is the Array constructor for Array objects:

Array[Symbol.species];// function Array()



// Species in derived objects

// In a derived collection object (e.g. your custom array MyArray), the MyArray species is the MyArray constructor. However, you might want to overwrite this, in order to return parent Array objects in your derived class methods:

class MyArray extends Array {

  // Overwrite MyArray species to the parent Array constructor
  
  static get [Symbol.species]() { return Array; }
}
console.log(MyArray)