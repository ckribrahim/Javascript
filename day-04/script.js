// QuerySelector eslesen ilk elemani secer
const heading = document.querySelector("h1");
console.log(heading);

const aboutEl = document.querySelector("#about");
console.log(about);

const spanEl = document.querySelector("#about span");
console.log(spanEl);

const menuEl = document.querySelector("ul.menu");
console.log(menuEl);

const menuItem = document.querySelector("ul.menu li:nth-child(2)");
console.log(menuItem);

heading.innerText = "Hello Javascript";

//queryselectorAll eslesen tum elemanlari getirir.

const spanEls = document.querySelectorAll("#about > span");
console.log(spanEls);

spanEls[0].innerText = "HELLO";


// Listenin iknci elemanini alip, son elemanina ekleyen kod

const listItem = document.querySelector(".menu li:nth-child(2)").innerText;
console.log(listItem)

document.querySelector(".menu li:last-child").innerText += ` ${listItem}`;

// listediki elemanin yerine koyu sekilde hello yazan kod

const listItem4 = document.querySelector(".menu li:nth-child(4)");
listItem4.innerText = "<b>Hello<b>";
listItem4.innerHTML = "<b>Hello<b>";


