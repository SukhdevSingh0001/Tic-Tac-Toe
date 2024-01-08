
let arr=[null,null,null,null,null,null,null,null,null]
let x_text="X";
let o_text="O";
let currentplayer="O";
let gameover=true;
let deg = 0;
let Pleft = 50;
let Ptop = 23;

function myfun(event){
    if(gameover){
let BoxId=event.target.id;
 
arr[BoxId]=
event.target.innerHTML=currentplayer;

if (checkWiner(currentplayer)) {
     document.querySelector(".show").innerHTML=`Winner player >> ${currentplayer}`;
     gameover = false;
     let a=document.querySelector(".line");
     a.style.transform = `rotate(${deg}deg)`;
            a.style.top = Ptop + "px";
            a.style.left = Pleft + "%";
            a.style.display = "block";

    }
    
currentplayer = currentplayer ===  o_text ? x_text : o_text
}
}

function checkWiner(player) {
    if (arr[0]===player) {
        if (arr[1]===player && arr[2]===player) {
            deg = 180;
            Ptop = 122;
            Pleft = 38.3;
            return true
        }
        if (arr[3]===player && arr[6]===player)  {
            deg = 90;
            Ptop = 231;
            Pleft = 30.4;
            return true
        }
        
    }
    if (arr[4]===player) {
        if (arr[0]===player && arr[8]===player) {
            deg = 48;
            Ptop = 233;
            Pleft = 38.3;
            return true
        }
        if (arr[2]===player && arr[6]===player) {
            deg = 134;
            Ptop = 233;
            Pleft = 38.3;
            return true
        }
        if (arr[3]===player && arr[5]===player) {
            deg = 180;
            Ptop = 230;
            Pleft = 38.3;
            return true
        }
        if (arr[1]===player && arr[7]===player) {
            deg = 90;
            Ptop = 231;
            Pleft = 38.6;
   
            return true
        }
         
    }
    if (arr[8]===player) {
        if (arr[2]===player && arr[5]===player) {
            deg = 90;
            Ptop = 231;
            Pleft = 46.3;
            return true
        }
        if (arr[6]===player && arr[7]===player) {
            deg = 180;
            Ptop = 338;
            Pleft = 38.3;
            return true
        }
    }
}
function restart() {
    
    currentplayer = "O";
    gameover = true;
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
        arr[i]=null;
    }
    document.querySelector(".show").innerHTML = "";
    let b = document.getElementById('line');
    b.style.display = "none";
  }