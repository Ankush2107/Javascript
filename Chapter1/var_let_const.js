console.log("Javascript tutorial 3: var, let and const")
let a = "Karan"
{
    let a = "Ankush"
    // let is block scope but var is not
    console.log(a)
}
console.log(a)

var b = "Aman"
{
    var b = "Sunil"
    console.log(b)
}
console.log(b)
// const can neither be updated nor be declared
const author = "Harry"
// author = 5
console.log(author)