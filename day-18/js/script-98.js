import showAlert, { showConfirm}from "./message.js"
//import { showConfirm } from "./message.js"

document.getElementById("btnAlert").addEventListener("click", ()=>{
    showAlert('Korkmadik! Savastik');
})

document.getElementById("btnConfirm").addEventListener("click", ()=>{
    showConfirm('Who am I ?');
})