

const body=document.querySelector("body");
const btn=document.querySelector("#btn");


// array
let diff_colors=["black","red","brown","blue","aqua","burlywood","teal","tomato","violet","black"];


let box=document.querySelector("#box")

btn.addEventListener("click",()=>{
    const randomIndex=Math.floor(Math.random()*10)
    box.style.backgroundColor=diff_colors[randomIndex];
})
