document.addEventListener("DOMContentLoaded", function () {
 
	square = document.getElementById("square");
    x = 0;
    y = 0;
    tx = 200;
    ty = 200;
    speed = 40;

    dx = (tx - x) / speed; 
    dy = (ty - y) / speed;

    function colorchange() {
		// 16777215 represents the max color code available in decimal. (I did have to google this fact) the .tostring(16) is used to convert the decimal number into hex to be an accurate color code.
		rcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
		/*while this loop does make it so that the square cannot be the exact same color as the background, 
		it is still probable that it could be a color so close to the background that it is not visible to the 
		human eye. Currently on the test model this has not occured.*/
        while(rcolor == "#83f28f"){
			rcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
		}
		square.style.backgroundColor = rcolor;
    }

    function move() {
        x += dx;
        y += dy;

        if (x <= 0 || x + square.offsetWidth >= window.innerWidth) {
            dx *= -1; 
            colorchange(); 
        }
        if (y <= 0 || y + square.offsetHeight >= window.innerHeight) {
            dy *= -1; 
            colorchange(); 
        }

        square.style.left = x + 'px';
        square.style.top = y + 'px';
    }

    animationInterval = setInterval(move, 16); 
});