# Give circle a minimum and maximum size

At the moment dont we have a minimum size for the circle. So it is possibull that the circle would have a size of 0. <br>
So lets make 2 new var's. 1 for the minimum and one for the maximum. that way we can use it when ever we want.

## give min and max to radius

minimum var = minR

maximum var = maxR

To add a minimum to a random nummber just add minR to the random number you created (`let radius = Math.floor(Math.random() * maxR) + minR;`). this wat even when the number is 0 it still get's the minimum added to it.

But now we an other problem. whit the maximum being to Lardg. to fix this simply reduse the minnimum from the maximum. Seeing it will reseeve the minimum afterwards. like this `let radius = Math.floor(Math.random() * (maxR - minR)) + minR;`.
