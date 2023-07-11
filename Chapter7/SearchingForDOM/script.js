// Change the card title to red.
// let ctitle = document.getElementsById('firstcardtitle');
// ctitle.style.color = "red";

let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "blue";
ctitles[1].style.color = "red";
ctitles[2].style.color = "green";
console.log(ctitles);

let ptext = document.querySelectorAll('.card-text');
ptext[0].style.color = "grey";
ptext[1].style.color = "yellow";
ptext[2].style.color = "cyan";
console.log(ptext);