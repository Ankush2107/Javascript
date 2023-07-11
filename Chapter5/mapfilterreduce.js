let arr = [12, 45, 78, 96]

// It creates new array
let a = arr.map((value, index, array)=> {
  console.log(value, index, array)
  return value + index;
})
console.log(a);

// Original array is not changing
console.log(arr);

// Array filter method
let arr2 = [45, 51, 84, 1, 25];
let a2 = arr2.filter((a) => { 
  return a < 10
})
console.log(a2);
 //Original array is not changing
console.log(arr2);

// Array reduce method
let arr3 = [1, 5, 4, 9, 6, 7]
let b = arr3.reduce((h1, h2) => {
  return h1 + h2
})
console.log(b);