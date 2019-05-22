let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

// NESESERY VAR'S

let minR = 10;
let maxR = 100;

let radius = Math.floor(Math.random() * (maxR - minR)) + minR;

let x = Math.floor(Math.random() * (canvas.width - radius * 2)) + radius;

let y = Math.floor(Math.random() * (canvas.height - radius * 2)) + radius;

speed = 2; // how meny pixels does the circle move every drawing.

let xM = speed; // set speed and direction for X
let yM = -speed; // set speed and direction for Y

// ANIMATION

function update() {

  if(x >= canvas.width - radius || x <= 0 + radius){ // check if the circle hits the edge of the canvas in X acas
    xM = xM - xM * 2; // change direction in X
  }

  if(y >= canvas.height - radius || y <= 0 + radius){ // check if the circle hits the edge of the canvas in Y acas
    yM = yM - yM * 2; // change direction in Y
  }

  x += xM; // set direction and speed to actual circle
  y += yM; // set direction and speed to actual circle

  context.fillStyle = "#FFF";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // DRAW CIRCLE

  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();

  requestAnimationFrame(update);

}

update() // start animation
