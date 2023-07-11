let num = [1, 2, 3, 4, 5, 6]

// Classical loop
// for(let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// For Each Loop
// num.forEach((i) => {
//   console.log(i);
// })

// String to array
// let name = "Ankush"
// let arr = Array.from(name)
// console.log(arr);

// for..of
for(let ele of num) {
  console.log(ele);
}

// for...in
for(let i in num) {
  console.log(num[i]);
}