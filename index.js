let canvas = document.querySelector("canvas"); // make var of canvas from html
canvas.width = 300; // give canvas a width
canvas.height = 300; // give canvas a height
let context = canvas.getContext('2d'); // get context of canvas. and put it in a var

context.fillStyle = "#000"; // give collor to shape (background)
context.fillRect(0, 0, canvas.width, canvas.height);// make shape (background)
