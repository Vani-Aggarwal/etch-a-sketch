const container = document.querySelector(".container");
const inputButton = document.querySelector(".input-button");
const gridSize = document.querySelector(".grid-size")


   function displayPrompt(){
    
    let input;
    do {
        input = prompt("TYPE HERE (MIN: 4; MAX: 100)");
        input = Number(input);
    } while (isNaN(input) || input < 4 || input > 100);
    

    if (input === null) {
        return "User canceled the prompt!";
    }
    return input;
}

let userInput = displayPrompt();
console.log(userInput);
inputButton.addEventListener('click' , displayPrompt);

let totalNumber = userInput * userInput;

let boxWidth =  600 / userInput + "px";

const randomColours = Math.random

function boxInTheContainer(){
    for(let i = 0 ; i < totalNumber ; i++){
        const box = document.createElement("canvas");
        box.classList.add("small-box");100
        container.appendChild(box);
        box.style.width = boxWidth;
        box.style.height = boxWidth;
        box.addEventListener('mouseenter' , () => {
            box.style.background = generateNewColor();
        })
    }
    console.log(boxWidth);
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
    
    gridSize.innerHTML = `${userInput} x ${userInput} `

