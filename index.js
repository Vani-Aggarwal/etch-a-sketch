const btn = document.querySelector('.gridDimensions');
const gridBox = document.querySelector('.grid');


let size = 0;

const displayPrompt = () => {
   size = prompt("Enter the grid length/width ");
   console.log(size) 
   if (size >= 2 && size <= 100){}
   else{
    prompt("invalid input,enter the grid length/width again")
   }
   return size;
};

// create one box












// pass it through for function with size as the max

function finalBoxNumber (){
    for(let i = 0 ; i < size ; i++){
        const draw = () => {
            const box = document.createElement("canvas");
            box.classList.add("box");
            box.style.border = "1px solid black";
            gridBox.appendChild(box);
        }
        draw()
    }
}

function allTogether(){
    displayPrompt();
    finalBoxNumber();
}

// it appears as the button is clicked
btn.addEventListener('click' , allTogether);
