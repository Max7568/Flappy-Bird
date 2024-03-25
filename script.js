function randomHeight() {
     const random = -((Math.random() * 590) + 150);

     hole.style.top = random + "px";
 }

 hole.addEventListener('animationiteration', randomHeight);

 setInterval(function () {
    const birdTop =
        parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (birdTop + 3) + "px";
 }, 10);