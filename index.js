let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "#FFF";
context.fillRect(0, 0, canvas.width, canvas.height);

// NESESERY VAR'S

let minR = 10;
let maxR = 100;

let radius = Math.floor(Math.random() * (maxR - minR)) + minR;

let x = Math.floor(Math.random() * (canvas.width - radius * 2)) + radius;

let y = Math.floor(Math.random() * (canvas.height - radius * 2)) + radius;


// ANIMATION

function update() { // creat my own function where i animate everything i need to animate

  x++; // slowly move to the right
  y--; // slowly move up

  // DRAW CIRCLE

  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();

  requestAnimationFrame(update); // animate whit my personal animation function

}

update() // start animation
