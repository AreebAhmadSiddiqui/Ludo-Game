let button=document.querySelector(".btn")
button.addEventListener("click",()=>{
    let p1=Math.floor(Math.random()*6)+1
    let p2=Math.floor(Math.random()*6)+1
    document.querySelector("#img-1").src=`images/${p1}.png`;
    document.querySelector("#img-2").src=`images/${p2}.png`;
    if(p1>p2){
       document.querySelector("h1").innerHTML="Player 1 Won"
    }
    else if(p1<p2){
        document.querySelector("h1").innerHTML="Player 2 Won"
    }
    else{
        document.querySelector("h1").innerHTML="Draw"
    }
})