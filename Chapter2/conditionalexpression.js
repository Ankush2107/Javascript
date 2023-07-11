const prompt = require('prompt-sync')();
// let a = prompt("Hey whats your age ? ")
// console.log(typeof a)

// // Converting the string to a number
// a = Number.parseInt(a);
// console.log(typeof a)


// // if-else condition
// if (a > 0) {
//     alert("This is a valid age");
// }else {
//     alert("This is an invalid age");
// }

let age = prompt("Hey whats your age ? ");
// age = Number.parseInt(age)     // Converting string to a number
// console.log(typeof age)

// alert("This is a valid age")

if(age > 0) {
    console.log("A valid age")
}else if (age > 10 && age < 15){
    console.log("You are a kid")
}else if (age > 18) {
    console.log("You are an adult")
}else{
    console.log("Invalid age")
}