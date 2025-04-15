let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice")
const msg= document.querySelector("#msg");


const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const Drawgame=()=>{
    console.log("game was draw")
    msg.innerText= "Game was draw"
    msg.style.backgroundColor= "rgb(54, 52, 52)";
}
function gencompchoice() {
    //rock paper scissor
    const options = ["rock", "paper", "scissors"];
    const randind = Math.floor(Math.random() * 3);
    return options[randind];

}

const Showwinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        console.log("You Win!");
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lose");
        msg.innerText=`You Lose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}


const playgame = (userchoice)=>{
    console.log("Users Choice = ",userchoice);
    const compchoice= gencompchoice();
    console.log("Comp Choice = ",compchoice);
    //generate comp choice

    if(userchoice===compchoice){
        Drawgame();
    } else{
        let userWin = true;
        if(userchoice==="rock"){
            //scissor, paper
            userWin = compchoice === "paper" ? false: true;

        } else if (userchoice === "paper"){
            //rock. scissor
            userwin = compchoice=== "scissors" ? false: true;
        } else{
            //rock paper
            userwin= compchoice==="rock" ? false: true;
        }
        Showwinner(userWin, userchoice, compchoice);

    }


}
    

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("Id");
        playgame(userchoice);
    })
})
