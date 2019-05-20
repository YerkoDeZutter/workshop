let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);
