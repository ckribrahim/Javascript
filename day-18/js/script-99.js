import { nSortDESC, nSortASC, stringSortASC, stringSortDESC } from "./sort.js";


const arr1 = ["Price", "Ghost", "Grey"];

document.getElementById("btn1").addEventListener("click", ()=>{
    console.log(stringSortASC(arr1));
})

document.getElementById("btn2").addEventListener("click", ()=>{
    console.log(stringSortDESC(arr1));
})

const arr2 = [13,54,56,72,18];


document.getElementById("btn3").addEventListener("click", ()=>{
    console.log(nSortASC(arr2));
})

document.getElementById("btn4").addEventListener("click", ()=>{
    console.log(nSortDESC(arr2));
})