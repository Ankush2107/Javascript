let x =  function(e) {
    console.log(e.target);  // target is botton html
    console.log(e.type, e.clientX, e.clientY);
    // alert("Hello World!");
}

// let y = function(e) {
//     alert("Hello World 2!");
// }

document.addEventListener('click',x);
// document.addEventListener('click', y);

// let a = prompt("What is your favourite number ? ");
// if(a == "2") {
//     document.removeEventListener('click', x);
// } 