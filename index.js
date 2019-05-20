let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "#FFF";
context.fillRect(0, 0, canvas.width, canvas.height);




// DRAW CIRCLE

context.beginPath(); // begin making shape
context.arc(100, 100, 50, 0, 2 * Math.PI); // make a circle
context.stroke(); // end making shape
