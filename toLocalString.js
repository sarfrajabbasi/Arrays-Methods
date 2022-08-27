// -----------toLocaleString()-----------

// The toLocaleString() method returns a string representing the elements of the array. 

// The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma ",").


// ------------Syntax------------

toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);



// -----------Parameters-------------


// locales Optional
// A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page.



// options Optional
// An object with configuration properties, for numbers see Number.prototype.toLocaleString(), and for dates see Date.prototype.toLocaleString().


// ------------Return value------------------
// A string representing the elements of the array.

// If you need to support truly obsolete JavaScript engines that don't support Object.defineProperty, it's best not to polyfill Array.prototype methods at all, as you can't make them non-enumerable.



// ----------EXAMPLE--------------


const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);


// -----------OUTPUT-----------

// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary


// ------------Using locales and options--------------


// The elements of the array are converted to strings using their toLocaleString methods.

// Object: Object.prototype.toLocaleString()
// Number: Number.prototype.toLocaleString()
// Date: Date.prototype.toLocaleString()

// Always display the currency for the strings and numbers in the prices array:

const prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });


// -------------OUTPUT-------------

// "￥7,￥500,￥8,123,￥12"

// For more examples, see also the Intl, NumberFormat, and DateTimeFormat pages.

