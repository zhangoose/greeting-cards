var c = document.getElementById('screen');
var ctx = c.getContext("2d");
var WIDTH = c.width;	
var HEIGHT = c.height;	
var bg = new Image();
var star = new Image();
var plane = new Image();
var x, y;
var ytheo; // theoretical y
var miss = 0;
var hit = 0;
var done = 0; // will be 1 when finished
var scream = new Audio("scream.mp3");
var welcome = new Audio("welcome.mp3");
var clown = new Image();
var fin = new Image();
clown.src = "clown.png";
fin.src = "final.png";



function mouse(mevent){
	if(done == 0){ // THIS IS SO DUMB
		if(mevent.pageX < WIDTH && mevent.pageX > 0 &&
			mevent.pageY < HEIGHT && mevent.pageY > 0){
			x = mevent.pageX;
			y = mevent.pageY;
			//console.log("x: " + x + " y: " + y);
			airplane();
			var ytheo = 131 * x / 523 + 50780/523;
			
			if(869 + 5 >= x && x >= 869 - 5 && ytheo + 1 >= y && ytheo - 1 <= y){
				done = 1;
				clearInterval(inter);
				ctx.drawImage(fin,0,0);
				welcome.play();
				
			}/*end of if*/
			if(ytheo + 1 >= y && ytheo - 1 <= y){
				
				//console.log("rawr");
				//sound.play();
				hit++;
				document.getElementById("hit").innerHTML = "HIT: " + hit;
				
			}
			else{
				
				ctx.drawImage(clown,0,0);
				scream.play();
				miss++;
				document.getElementById("miss").innerHTML = "MISS: " + miss;
				
			}
		}
	}/*end of everything*/
	
}/*end of mouse function*/

$(document).mousemove(mouse);

function clearRect(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}/*end of clearREct function*/

function airplane(){
	plane.src = "plane.gif";
	ctx.drawImage(plane,x-42,y-18);
	
}/*end of airplane function*/

function mdraw(){

	bg.src = "map2.png";
	ctx.drawImage(bg,0,0);
	
	star.src = "star.gif";
	ctx.drawImage(star, 290,150);
	ctx.drawImage(star,849,287);
	airplane();
	

}/*end of mdraw function*/

function init(){
	
	inter = setInterval(mdraw,20);
	mdraw();
}
init();
