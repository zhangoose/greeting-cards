var c = document.getElementById('screen');
var ctx = c.getContext("2d");
var WIDTH = c.width;
var HEIGHT = c.height;
var color = "green"; // for now tohoho
var x, y;

function mouse(mevent){
	//to trace mouse movements (jquery)
	x = mevent.pageX;
	y = mevent.pageY;
	console.log("x is " + x +  " y is " + y);
	preBOOM(x,y);
}//end of mouse mevent function

$(document).click(mouse);

function drawCircle(x,y,rad,color){
	//to draw a circle
	ctx.beginPath();
	ctx.arc(x,y,rad,0,2 * Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}//end of drawCircle function

function speck(x,y,color){
	//to draw a single speck
	drawCircle(x,y,3,color);	
}//end of speck function

function preBOOM(x,y){
	//the trail leading up to the BOOM of the firework
	//
	speck(x-10,y-10,color);
}//end` of preBOOM

function blackRect(){
	//to clear the screen
	ctx.fillStyle="black";
	ctx.fillRect(0,0,WIDTH,HEIGHT);
}//end of blackRect function

function init(){
	blackRect();
}//end of init function


init();
