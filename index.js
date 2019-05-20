let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "#FFF";
context.fillRect(0, 0, canvas.width, canvas.height);

context.beginPath();
context.fillStyle = 'red';
context.arc(100, 100, 50, 0, 2 * Math.PI);
context.stroke();
