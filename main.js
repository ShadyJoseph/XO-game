var squares=[]
var title=document.querySelector("#turn")
var messi="1"
var shady="1"
var turn="1"
function game(id){
    if(messi=="1")
  { 
    var xClick=document.getElementById(id)
   if(turn=="1"&& xClick.innerHTML==""){ 
    title.innerHTML="O TURN"
    xClick.innerHTML="X"
    turn="2"
   }else if(turn=="2"&&xClick.innerHTML==""){
    title.innerHTML="X TURN"
    xClick.innerHTML="O"
    turn="1" 
   } 
   winner(1,2,3)
   winner(4,5,6)
   winner(7,8,9)
   winner(1,4,7)
   winner(2,5,8)
   winner(3,6,9)
   winner(1,5,9)
   winner(3,5,7)
}
}

function winner(num1,num2,num3){
    for(var i=1;i<10;i++){
        squares[i]=document.querySelector("#item"+i).innerHTML
    } 
    if(squares[num1]==squares[num2]&&squares[num1]!=""&&squares[num2]==squares[num3]){
        document.querySelector("#item"+num1).style.backgroundColor="var(--yellow)"
        document.querySelector("#item"+num2).style.backgroundColor="var(--yellow)"
        document.querySelector("#item"+num3).style.backgroundColor="var(--yellow)"
        title.innerHTML=`WE HAVE A WINNER!!`
        messi="2"
    }
}

function restart(){
 title.innerHTML=`Start the game`
 messi="1"
    for(var i=1;i<10;i++){
        document.querySelector("#item"+i).innerHTML=""
        document.querySelector("#item"+i).style.backgroundColor="var(--blue)"
    }
}  
function blocked(){
    for(var i=1;i<10;i++){
        squares[i]=document.querySelector("#item"+i).innerHTML
        if(JSON.stringify(squares[i])!=""){
         shady="2"
        }else{
         shady="1"
        }
    }
}

