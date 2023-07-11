// for loop
// for(let i = 0; i < 5; i++){
//     console.log(i)
// } 

// for-in loop

let obj = {
    Ankush : 90,
    Anjali : 56,
    Ankita : 33,
    Karan : 95
}
for(let i in obj){
    console.log("Marks of " + i + " are " + obj[i])
}

// for of loop
for(let j of "Ankush"){
    console.log(j)
}