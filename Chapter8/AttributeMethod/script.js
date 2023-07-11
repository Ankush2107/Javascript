let a = document.body.getElementsByClassName("content");
console.log(a[0]);
let b = a[0].getAttribute("name");
console.log(b);
let c = a[0].hasAttribute("id");
console.log(c);
a[0].setAttribute("id", "true");
let remove = a[0].removeAttribute("class");