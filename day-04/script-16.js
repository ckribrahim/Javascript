const pageTitleEl = document.querySelector("#pageTitle");

console.log(pageTitleEl);
console.log(pageTitleEl.classList);

//pageTitleEl.classList.add("title");
//pageTitleEl.classList.add("bg-blue");

pageTitleEl.classList.add(...["title", "bg-blue"]);



const aboutEl = document.querySelector("#about");
aboutEl.classList.add("bg-blue")

