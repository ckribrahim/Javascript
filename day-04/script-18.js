function sayHello(){
    const txtNameEl = document.querySelector("#txt")
    const wEl = document.querySelector("#welcome");

    wEl.innerHTML = `Hello ${txtNameEl.value}`;
}