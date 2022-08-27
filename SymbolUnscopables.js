//
var keys = [];
with (Array.prototype){
  keys.push('something');
}
console.log(Object.keys(Array.prototype[Symbol.unscopables]))
// ["at", "copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
