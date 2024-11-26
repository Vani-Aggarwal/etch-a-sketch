const container = document.querySelector(".container");

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

