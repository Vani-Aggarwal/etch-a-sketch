const container = document.querySelector(".container");
const inputButton = document.querySelector(".input-button");


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

let userInput = displayPrompt()


inputButton.addEventListener('click' , displayPrompt);


let totalNumber = userInput * userInput;

let boxWidth =  256 / userInput + "px";

function boxInTheContainer(){
    for(let i = 0 ; i < totalNumber ; i++){
        const box = document.createElement("canvas");
        box.classList.add("small-box");100
        container.appendChild(box);
        box.style.width = boxWidth;
        box.style.height = boxWidth;
        box.style.background = "lightblue"
        
        box.addEventListener('mouseenter' , () => {
            box.style.backgroundColor = 'black';
        })
    }
    console.log(boxWidth);
}

boxInTheContainer()



