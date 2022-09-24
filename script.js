

window.onload=function(){

    // const eachbox = document.querySelectorAll(".box");

    const boxes = Array.from(document.querySelectorAll(".box"));
    const playerDisplay = document.querySelector(".playerDisplay");
    const announce = document.querySelector(".announance");
    const reset = document.querySelector("#reset");
    
    
    // boxes.forEach((box)=>{
    //     // console.log(box);
    //     box.innerText = "abhi";
    // })

    const winningCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        
    ];


    // console.log(dispPlaying.playingO);
    // // playerDisplay.innerText = "abhi";
    // console.log(playerDisplay.innerHTML);


    let board = ["","","","","","","","",""];
    let currentPlayer = "X";
    let isgamevalid = true;
    let rounds = true;
    // console.log(board);

    boxes.forEach((box,index)=>{
        box.addEventListener("click",()=>{userAction(box,index)});
    })

    
    
    function userAction(box,index){
        // console.log(index);
        if(box.innerText=="" && isgamevalid){

            box.innerText = currentPlayer;
            board[index] = currentPlayer;
            box.classList.add(`selected${currentPlayer}`);
            changeplayer();
            displayturn(currentPlayer);
            checkwinnings();
            
            // console.log("user Input clicked");
            // console.log(board);  


        }
    }

    function changeplayer(){
        currentPlayer = currentPlayer=="X" ? "O" : "X";
    }

    const dispPlaying={
        playingX : `<h2>Player <span class='disXY'> X </span>'s turn</h2>`,
        playingO : `<h2>Player <span class='disXY'> O </span>'s turn</h2>`,
    };

    console.log(dispPlaying.playingO);
    
    function displayturn(player){
        console.log(playerDisplay);
        playerDisplay.innerHTML = player==="X" ? dispPlaying.playingX : dispPlaying.playingO;
    }

    let xwon = "Xwon";
    let owon = "Owon";
    let tie = "Tie";

    

    function checkwinnings(){
        for(let i=0;i<=7;i++){
            let winArr = winningCondition[i];
            // console.log(winArr);
            // console.log( board[winArr[0]]);
            // console.log( board[winArr[1]]);
            // console.log(board[winArr[2]]);

            let a = board[winArr[0]];
            let b = board[winArr[1]];
            let c = board[winArr[2]];
            if(a,b,c !== "" && a===b && b===c){
                let ans = currentPlayer == "X" ? announceing(owon) : announceing(xwon);
                console.log(ans);
                isgamevalid = false;
                console.log(isgamevalid);
                rounds = false;
                abhishekK();
            }

        }

        if(!board.includes("") && rounds){
            announceing(tie)
            abhishekK();

        }

    }

    function announceing(status){
        console.log("announcing called"); 
        announce.classList.remove("hide");
        // announce.innerHTML = `<h1>Abhishek K</h1>`
        console.log(status)
        switch(status){
            case "Xwon" :{
                console.log("X won the game");
                announce.innerHTML =   `<h2 class="wonstatus">Player <span>X</span> Won the game</h2>`
                break;
            }
            
            case "Owon":{
                console.log("X won the game");
                announce.innerHTML =   `<h2 class="wonstatus">Player <span>O</span> Won the game</h2>`
                break;
            }

            case "Tie":{
                console.log("Match Draw");
                announce.innerHTML =   `<h2 class="wonstatus">Match <span>Draw</span></h2>`
                break;
            }
        }
        setTimeout(()=>{announce.classList.add("afterannouncing");},500);
        
    }


    // reset.addEventListener("click",(e)=>{
    //     console.log("reset button pressed");
    //     board = ["","","","","","","","",""];
    //     currentPlayer = "X";
    //     isgamevalid = true;
    //     rounds = true;
    //     boxes.forEach=()=>{
    //         box.classList.remove("selectedX");
    //         box.classList.remove("selectedO");

    //     }
    // });

    function abhishekK(){
        playerDisplay.innerHTML = `<h3 class="abhi"><a href="https://www.linkedin.com/in/kabhik2898/"> Abhishek K </a></h3>`;
    }
    
    
    

}