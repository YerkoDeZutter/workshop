let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth; //get width of open window
canvas.height = window.innerHeight; //get height of open window
let context = canvas.getContext('2d');

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);
