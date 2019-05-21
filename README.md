# full screen

Lets say that you don't want a small screen to display animation or image. But you want it to display on the whole screen so you can use it as a background.

Then you don't have to do much to make that happen. where you declared the size of the canvas you just need to get the window object and get it's size (window.innerWidth and window.innerHeight). and you're done.

## keep same size as the window

But a small problem there is that it will take the size of the window when it first opens. to change this you'll have to make you're own function that activates every time the window changes it's size. And the change the canvas's size whit the window.
