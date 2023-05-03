const txtEl = document.querySelector("#txt");
console.log(txtEl);

const welcomeEl = document.querySelector("#welcome");

welcomeEl.innerHTML = `<strong>welcome <em>${txtEl.value}</strong>`