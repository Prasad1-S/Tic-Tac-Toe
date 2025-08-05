let currentPlayer = "cross";
let board = ["","","","","","","","",""];
// $(".cells").click(function(){
//     if(currentPlayer == "cross"){
//         currentPlayer="circle";
//     }else{
//         currentPlayer = "cross";
//     }
//     console.log(currentPlayer);
// });

$(".cells").click(function(){
    let index = parseInt(this.dataset.index);
    if (this.innerHTML.trim() == "") {
        if(currentPlayer=="cross"){
            this.innerHTML=`<span class="material-symbols-outlined cross">close</span>`;
            board[index]="X";
            currentPlayer="circle";
        }else{
            this.innerHTML=`<span class="material-symbols-outlined circle">circle</span>`;
            board[index]="O";
            currentPlayer = "cross";
        }
    }

});
$(".cells").click(function(){
   let winner = checkWinner();
   if(winner !=null){
    if(winner == "X"){
        $(".h1").html(`X wins!`);
        $(".h1").css("color","#14FFEC");
    }else{
        $(".h1").html(`O wins!`);
        $(".h1").css("color","#FF4D00");
    }}else if( boardStatus() && winner==null){
        $(".h1").html(`It's a Draw!`);
        $(".h1").css("color","#FFD65A");
    }
    $(".h1").addClass("h1 row");
    // $(".h1").css("font-size","50px");
    $(".h1").css("font-weight","700");
    // $(".h1").css("margin-bottom","33px");
    // $(".h1").css("margin-top","34px");
   
});

function boardStatus(){
    for(let i=0;i<board.length;i++){
        if(board[i]==""){
            return false;
        }
    }
    return true;
}

$(".ref").click(function (){
    $(".ref").addClass("clicked");
    $(".cells").html("");
    currentPlayer = "cross";
    board = ["","","","","","","","",""];
    $(".h1").html(`TIC-TAC-TOE`);
    $(".h1").addClass("h1 row reff");
     $(".h1").css("font-size","50px");
    $(".h1").css("font-weight","700");
    $(".h1").css("margin-bottom","33px");
    $(".h1").css("margin-top","34px");
     $(".h1").css("color","#BC6FF1");
     setTimeout(()=>{
        $(".ref").removeClass("clicked");
     },150);
});
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

function checkWinner(){
    for(let i=0;i<winPattern.length;i++){
        let a = winPattern[i][0];
        let b = winPattern[i][1];
        let c = winPattern[i][2];
        
        if(
            board[a] !="" &&
            board[a] == board[b] &&
            board[b] == board[c]
        ){
            return board[a];
        }        
    }
    return null;
}
