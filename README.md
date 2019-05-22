# Animation

Now you know how to draw something and know that you can change it how you want. Now we can look into some animation.

to use animation in your canvas project you need a function whit a name that you choose yourself. In this function you put everything you want to change/animate. and at the end of the function you have to put the `requestAnimationFrame()` function whit your own made function's name in the parameters. like this  `requestAnimationFrame(update)`.

And in the beginning of the function you put what you want to change in the animation. In my case now I just want to move my circle slowly to the right. So I just added `x++`. That way every time it draw's the circle again it move's 1 pixel to the right. And I also added `y--`. This makes the circle move slowly up.
