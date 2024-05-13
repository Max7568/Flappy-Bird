let jumping = 0

function randomHeight() {
     const random = -((Math.random() * 590) + 150);

     hole.style.top = random + "px";
 }

 hole.addEventListener('animationiteration', randomHeight);

 setInterval(function () {
    const birdTop =
        parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (jumping === 0) {
    bird.style.top = (birdTop + 3) + "px";
    };
    let wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  let cTop = -(500 - birdTop);
  if((birdTop>480)||((wallLeft<20)&&(wallLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))) {
    alert("Game over. Score: "+counter);
    bird.style.top = 100 + "px";
    counter = 0;
  }
}, 10);

 function jump() {
    jumping = 1;

    let jumpCount = 0;

    let jumpInterval = setInterval(function () {
      const birdTop =
        parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
      if (birdTop > 6) {
        bird.style.top = (birdTop - 6) + "px";
      }
      if (jumpCount > 10) {
        clearInterval(jumpInterval);

        jumping = 0;

        jumpCount = 0;

      }
      jumpCount++;
    },10);

  }

//   // if (bird dotyka hole)
// dodaj punkt



//   // else if (bird dotyka wall)
//   alert("GAME OVER")
  
  
  
  
  