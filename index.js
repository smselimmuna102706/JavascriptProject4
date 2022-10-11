// initializing some values

let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;  

// finding the Elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingNumber = form.querySelector("#gussingNember");
const checkBtton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resutText");
const LostWonMassege = document.createElement("p");
const remainAttempts = cardBody.querySelector(".remainAttempts");


form.addEventListener("submit", function(event){
    event.preventDefault();
    
    attempts++;
    if(attempts==5){
        gussingNumber.disabled = true;
        checkBtton.disabled =true;

    }if (attempts<6) {
        checkResult(gussingNumber.value);
        remainAttempts.innerHTML = `Remaining attempts : ${totalAttempts-attempts}`; 
    }

});

  function checkResult(gussingNumber){
     console.log(gussingNumber);
     const randomNumber = getRandomNumber(5);
     if(gussingNumber == randomNumber){
        resultText.innerHTML = `you have won`;
        totalWons++;
     }else{
        resultText.innerHTML = `you have lost ; nandom number was : ${randomNumber}`;
        totalLosts++;
     }
      
     LostWonMassege.innerHTML = `Won :${totalWons}, Lost : ${totalLosts}`;
     LostWonMassege.classList.add("large-text");
     cardBody.appendChild(LostWonMassege);

  }


function getRandomNumber (limit){
    return Math.floor(Math.random()*limit)+ 1;
}