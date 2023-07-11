console.log("Operators in javaScript")
let a = 4
let b = 2;

// Arithematic operator
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)


console.log("a++ = ", a++)
console.log(a)
console.log("++a = ", ++a)
console.log("a-- = ", a--)
console.log(a)


// Assignment Operator
let c = 8;
c += 10;
console.log(c)


// Comparison Operator
let comp1 = 6
let comp2 = "6"
console.log(comp1 == comp2)  // It will give true
console.log(comp1 != comp2)
console.log(comp1 === comp2) // it will not give true because same number but different datatype
console.log(comp1 !== comp2)


//  Logical Operators
let x = 5;
let y = 6;
console.log(x < y && x == 5)
console.log(x > y || x == 5)
console.log(!false)