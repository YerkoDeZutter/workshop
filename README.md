# Draw a circle

Now that we have a screen we can finaly draw something on the screen. So lets start whit something simpel. a circle.

To draw a circle you need to declare you are starting to draw a line whit `context.beginPath();`.
Not to draw a circle there is a other canvas function to help you `context.arc()`. Whit this function you can draw a line whit a arc.

After you are done drawing you may knowdis that you cant see anything. that is because even tho it is drawin, it has no fill color or stroke (out line). to give it a line just write `context.stroke()` beneath the drawing to give the drawing a stroke (line).

## arc function

the `context.arc()` requires 5 parameters.

- placement in X aces
- placement in Y aces
- radius (size) of the circle
- the starting angle
- the ending angle

so like `context.arc(x, y, radius, start, end)`
