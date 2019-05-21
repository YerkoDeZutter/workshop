let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "#FFF";
context.fillRect(0, 0, canvas.width, canvas.height);




// DRAW CIRCLE

context.beginPath(); // begin making shape
context.arc(100/*place where in x*/, 100/*place where in y*/, 50/*circle size (radius)*/, 0/*arc begin*/, 2 * Math.PI/*arc end*/); // make a circle
context.stroke(); // give drawing a stroke
