let boxtext = document.querySelectorAll('.boxtext');
let info = document.querySelector('.info');
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('#reset');
let turn = "X";
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//Function to change the turn
const changeTurn = () => turn === "X" ? "0" :  "X";


//Function to check for a win
const checkWin = ()=>{
   wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
           info.innerText = boxtext[e[0]].innerText + " won";
           boxtext[e[0]].style = "scale:1.5; color: green"
           boxtext[e[1]].style = "scale:1.5; color: green"
           boxtext[e[2]].style = "scale:1.5; color: green"
        }
   });
}

//Game Logic
boxes.forEach((e, index ) => {
    e.addEventListener('click', () => {
        if(boxtext[index].innerText === "")
        {
            boxtext[index].innerText = turn;
            turn = changeTurn();
            info.innerText = "Turn for "+turn;
            checkWin();
        }
    });
});

reset.addEventListener('click', () => {
    turn = "X";
    info.innerText = "Turn for X"
    boxtext.forEach(e => {
      e.innerText = "";
      e.style = "scale:1; color: black"
    })
})




