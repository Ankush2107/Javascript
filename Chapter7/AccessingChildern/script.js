console.log(document.body.firstChild);
console.log(document.body.childNodes[0]);
console.log(document.body.lastChild);
console.log(document.body.childNodes[document.body.childNodes.length-1]);

// Convert it in array
let arr = Array.from(document.body.childNodes) 
console.log(arr);