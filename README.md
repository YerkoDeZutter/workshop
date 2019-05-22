# Let the circle actually animate

Now you probably noticed by now that the circle dose not actually animate but just draw's a long line. This is because it keeps drawing the same circle over and over again 1 pixel away of where it originally was. But not the background.

To fix this just add where you create your background in your animation function. Right before you draw your circle. Tis should fix it completely. 
