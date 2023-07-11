let b = document.body.getElementsByClassName("container")[0];
let a = document.createElement('div');
a.className = "des";
a.id = "id1";
a.innerHTML = "<h1>Hello Ankush!!!</h1>";
b.prepend(a);
// b.before(a);  // Before container
// b.after(a);   // After container