// console.log(document.getElementsByTagName("span")[0]);
// console.dir(document.getElementsByTagName("span")[0]);

// console.log(document.firstChild.nodeName);
// console.log(document.firstElementChild.nodeName);

let a = document.getElementsByClassName("text");
console.log(a[0].textContent);
a[0].textContent = "Hey there this is Karan can I talk to you it's urgent.";
console.log(a[0].textContent);

console.log(document.body.textContent);