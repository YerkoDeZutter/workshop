# Random circle size

Now that we're able to draw something whit the canvas lets add some normal JS that is not restricted whit canvas to improve the canvas we made. By adding some randomness.

Now lets create a random number and put in a var so you can use it at a later date if you need to (by using `Math.random()`).

`Math.random()` = 0 to 1 (0.3920472048).<br/>
`Math.floor()` = remove decimal and everything after (0.3920472048 = 0).<br/>
`Math.random() * 100` = 39.20472048, ` Math.floor(39.20472048)` = 39.

When you are don whit that you can put the var in the `context.arc()` function where you declare the radius (size).
