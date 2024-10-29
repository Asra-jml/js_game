score=0;
cross=true;

audiogo= new Audio('080205_life-lost-game-over-89697.mp3')
audio= new Audio('game-music-loop-6-144641 (1).mp3')

document.onkeydown = function(e){
    setTimeout(() => {
        audio.play();
    }, 1000);
    
    console.log("Key code is: ",e.keyCode)
    if(e.keyCode===38){
        player=document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(()=>{
            player.classList.remove('animatePlayer')
        }, 700);
    }
    if(e.keyCode===39){
        player=document.querySelector('.player');
        playerX= parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 112 + "px";
    }
    if(e.keyCode===37){
        player=document.querySelector('.player');
        playerX= parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 112) + "px";
    }
}
setInterval(()=>{
   player=document.querySelector('.player');
   gameOver=document.querySelector('.gameOver');
   obstacle=document.querySelector('.obstacle');

   plx= parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
   ply= parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

   obx=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
   oby=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

   offsetX= Math.abs(plx-obx);
   offsetY= Math.abs(ply-oby);

   console.log(offsetX, offsetY)

   if(offsetX<113 && offsetY<52){
      gameOver.style.visibility= 'visible';
      obstacle.classList.remove('obstacleAni')
      audiogo.play();
      setTimeout(() => {
        audiogo.pause();
        audio.pause();
      }, 2000);
   }
  else if(offsetX< 145 && cross){
    score+=1;
    updateScore(score);
    cross=false;
    setTimeout(() => {
        cross=true;
    }, 1000);

    setTimeout(() => {
            aniDur= parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.1;
            obstacle.style.animationDuration= newDur + 's';
    }, 500);
  }
},10);

function updateScore(score){
    scorecount.innerHTML="Your score: "+ score ;
}
