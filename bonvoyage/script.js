var c = document.getElementById('screen');
var ctx = c.getContext("2d");
var WIDTH = c.width;  
var HEIGHT = c.height;	
var bg = new Image();
var star = new Image();
var plane = new Image();
var x, y;


function mouse(mevent){
	if(mevent.pageX < WIDTH && mevent.pageX > 0 &&
		mevent.pageY < HEIGHT && mevent.pageY > 0){
		x = mevent.pageX;
		y = mevent.pageY;
		console.log("x: " + x + " y: " + y);
		airplane();
	}
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
	airplane();
	

}/*end of mdraw function*/

function init(){
	
	inter = setInterval(mdraw,20);
	mdraw();
}
init();
