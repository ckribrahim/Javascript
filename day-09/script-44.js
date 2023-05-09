const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult = document.querySelector("#txtResult");

let randomNumber = 0;

const start = () =>{
    randomNumber = getRandomNumber();
    txtNum.removeAttribute("disabled")
    txtNum.focus();
    btnGuess.classList.remove("d-none")
    btnStart.innerHTML = "Reset game";
    txtResult.innerHTML = "";

}

const reset = () =>{
    btnGuess.classList.add("d-none");
    txtNum.setAttribute("disabled", "true");
    btnStart.innerHTML = "Start Game";
}

const guess = () =>{ 
    const guessNumber = Number(txtNum.value);
    if(!guessNumber || isNaN(guessNumber) || guessNumber>100 || guessNumber<1){
        txtResult.innerHTML = "Please enter a number between 1 - 100";
        return;

    }


    if(guessNumber === randomNumber){
        txtResult.innerHTML = `Jackpot! 🏆🏆🏆 You win! 🏆🏆🏆 The number was ${randomNumber}`;
        txtResult.classList.remove("text-danger");
        txtResult.classList.add("text-success");
        /*
         txtResult.classList.replace("text-danger", "text-success");
        */

        
    }else if(guessNumber > randomNumber){
        txtResult.innerHTML = ` ${guessNumber} Too High ! Lower the Number..👎`;

        
    }else{
        txtResult.innerHTML = `${guessNumber} Too Low ! Raise the Number.. 👍`;
    }

    txtNum.focus();
      
      

}
const getRandomNumber = () =>{
    return Math.floor(Math.random() * 100) + 1;

}