let marks_class_12 = [91, 92, 93, 94, 95, null, 'Ankush', "Not Present"];
// console.log(marks_class_12);
// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);
// console.log(marks_class_12[6]);
// console.log(marks_class_12[7]);

// marks_class_12[8] = 65;

/* 
Arrays are mutable arrays can be change
 */

// marks_class_12[8] = 85;
// console.log(marks_class_12[8]);

// // length of the array
// console.log("The length of marks_class_12 : ", marks_class_12.length);

// // typeof = object
// console.log(typeof marks_class_12);

// for loop
for(let i = 0; i < marks_class_12.length; i++) {
    console.log(marks_class_12[i]);
}

// for in loop
for(let i in marks_class_12){
    console.log(marks_class_12[i]);
}