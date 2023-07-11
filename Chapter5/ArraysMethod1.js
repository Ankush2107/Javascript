//Array Method

let num = [1, 2, 3, 4]
console.log(num);

// it will change array into string
// let b = num.toString(); 
// console.log(b);

//Join method
// let c = num.join(" and ")
// console.log(c, typeof c);

// pop change same array
num.pop(); // pop return the poped element
console.log(num);

num.push(15); // push return the new array length
console.log(num);

// Original array modified
// console.log(num.shift()); // remove element from start of the array
// console.log(num);

num.unshift(54);
console.log(num);