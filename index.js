let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "#FFF";
context.fillRect(0, 0, canvas.width, canvas.height);


// NESESERY VAR'S

let radius = Math.floor(Math.random() * 100); // get random nummber between 0 and 100 and put it in a var


// DRAW CIRCLE

context.beginPath();
context.arc(100, 100, radius, 0, 2 * Math.PI); // give radius the random nummber
context.stroke();
