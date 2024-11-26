const container = document.querySelector(".container");
const inputButton = document.querySelector(".input-button");

let input;

function displayPrompt(){
    
    do {
        input = prompt("TYPE HERE (MIN: 4; MAX: 100)");
        input = Number(input);
    } while (isNaN(input) || input < 4 || input > 100);
    

    if (input === null) {
        return "User canceled the prompt!";
    }
    return input;
}
console.log(displayPrompt())
inputButton.addEventListener('click' , displayPrompt)
let gridSize = 16 * 16;

function boxInTheContainer(){
    for(let i = 0 ; i < gridSize ; i++){
        const box = document.createElement("canvas");
        box.classList.add("small-box");
        container.appendChild(box);
        
        box.addEventListener('mouseenter' , () => {
            box.style.backgroundColor = 'black';
        })
    }
    console.log(gridSize);
}

boxInTheContainer()



