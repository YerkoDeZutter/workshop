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

let x = Math.floor(Math.random() * canvas.width); // get random nummber between begginging and end of width en put it in a var

let y = Math.floor(Math.random() * canvas.height); // get random nummber between begginging and end of height en put it in a var


// DRAW CIRCLE

context.beginPath();
context.arc(x, y, radius, 0, 2 * Math.PI); // putt bolth var's here to declare position
context.stroke();
