let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let msg_container = document.querySelector(".msg-container");
let para = document.querySelector("#msg")
let new_btn = document.querySelector("#new_btn");
let turn0=true;

let wining_cond = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,8]
]
const resetgame = ()=>{
    turn0=true;
    enablebtn();
    msg_container.style.display = "none";
    
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn0===true){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }

        box.disabled=true;
        checkwinner();
    })
    
})

const checkwinner = ()=>{
    for(let pattern of  wining_cond){
        let value1= boxes[pattern[0]].innerText;
        let value2= boxes[pattern[1]].innerText;
        let value3= boxes[pattern[2]].innerText;

        if(value1 != "" && value2!= "" && value3 != ""){
            if(value1===value2 && value2===value3){
                console.log("winner",value1)
                disabledbtn();
                msgwinner(value1);
            }
        }
    }
}
 const disabledbtn = ()=>{
     for(let box of boxes){
        box.disabled=true;
     }
 }
 const enablebtn = ()=>{
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
     }
 }
 const msgwinner = (value)=>{
    msg_container.style.display = "block";
    para.innerHTML = `Congratulation,Winner is ${value}`
 }

 new_btn.addEventListener("click",()=>{
    resetgame();
 })

 const restart = ()=>{
    for(let box of boxes){
        box.innerText="";
     }
 }
 reset_btn.addEventListener("click",()=>{
    restart();
    enablebtn();
    msg_container.style.display = "none";
 })