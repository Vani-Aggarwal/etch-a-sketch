const container = document.querySelector(".container");
const inputButton = document.querySelector(".input-button");
const gridSize = document.querySelector(".grid-size")

let userInput;

function displayPrompt  ()  {

    let input;
    do {
        input = prompt("TYPE HERE (MIN: 4; MAX: 100)");
        input = Number(input);
    } while (isNaN(input) || input < 4 || input > 100);


    if (input === null) {
        return "User canceled the prompt!";
    } 
    userInput = input;

    gridSize.textContent = `Grid Size = ${userInput} x ${userInput} `

    return input;
}


if(!userInput){
    userInput = 16
}




function boxInTheContainer(){

    let totalNumber = userInput * userInput;

    let  boxWidth =  (600 / userInput + "px");

    container.replaceChildren()
   
    for(let i = 0 ; i < totalNumber ; i++){
        const box = document.createElement("canvas");
        box.classList.add("small-box");
        container.appendChild(box);
        box.style.width = boxWidth;
        box.style.height = boxWidth;
        
        box.addEventListener('mouseenter' , () => {
            box.style.background = generateNewColor();
        })
    }
}
boxInTheContainer()



const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function getCharacter(index) {
    return hexCharacters[index];
}

function generateNewColor() {
    let hexColorRep = "#";

    for (let index = 0; index < 6; index++){
        const randomPosition = Math.floor ( Math.random() * hexCharacters.length );
        hexColorRep += getCharacter( randomPosition );
    }

    return hexColorRep;
}
    
function allTogether(){
    displayPrompt();
    boxInTheContainer();
}

inputButton.addEventListener('click' , allTogether);


