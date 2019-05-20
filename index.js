let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "#FFF";
context.fillRect(0, 0, canvas.width, canvas.height);


// NESESERY VAR'S

let minR = 10; // make minnimum radius size

let maxR = 100; // make maximum radius size

let radius = Math.floor(Math.random() * (maxR - minR)) + minR; // add a minimum and maximum


// DRAW CIRCLE

context.beginPath();
context.arc(100, 100, radius, 0, 2 * Math.PI);
context.stroke();
