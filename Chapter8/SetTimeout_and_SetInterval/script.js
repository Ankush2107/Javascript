document.write("Hellow");

// let a = setTimeout(function() {
//     alert("I am inside of set timeout");
// }, 2000)

// // TimeOut execution will be stop when you use clear timeout
// let b = prompt("Do you want to clear set TimeOut?")
// if("yes" == b) {
//     clearTimeout(a);
// }
// console.log(a);

 const sum = (a, b, c) => {
    console.log("Yes I am running " + (a + b + c))
 }
 setInterval(sum, 1000, 1, 2, 7);