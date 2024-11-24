const btn = document.querySelector('.gridDimensions');


let size = 0;

const displayPrompt = () => {
   size = prompt("Enter the grid length/width ");
   console.log(size) 
   if (size > 2 && size < 100){}
   else{
    prompt("invalid input,enter the grid length/width again")
   }
   return size;
};

btn.addEventListener('click' , displayPrompt);
