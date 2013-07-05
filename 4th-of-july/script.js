var c = document.getElementById('screen');
var ctx = c.getContext("2d");
var WIDTH = c.width;
var HEIGHT = c.height;
var inter; // for the interval
var color = "rgba(255,5,5,0.3)"; // for now tohoho
var x, y;
var dx = 2;
var sy = HEIGHT; //for the spec
var count = 0;



function drawCircle(x,y,rad,color){
	//to draw a circle
	ctx.beginPath();
	ctx.arc(x,y,rad,0,2 * Math.PI, false);
	ctx.fillStyle = color; 
	ctx.fill();
	ctx.closePath();
}//end of drawCircle function

function blackRect(){
	//to clear the screen
	ctx.fillStyle="black";
	ctx.fillRect(0,0,WIDTH,HEIGHT);
}//end of blackRect function

function transRect(){
	//createa transparent rectangle--ish. alpha 0.5.
	ctx.fillStyle="rgba(0,0,0,0.3)";
	ctx.fillRect(0,0,WIDTH,HEIGHT);
}//end of transrect function


function speck(x,y,color){
	//to draw a single speck
	drawCircle(x,y,3,color);	
	
}//end of speck function

function actualBOOM(){
	console.log("BOOOOOOOOOOOOOOOOOMm");
	

}//end of actualBOOM function

function preBOOM(){
	//the trail leading up to the BOOM of the firework
	
	if(sy >= y){
		speck(x-10, sy,color);	
		sy = sy - 2;
		console.log("fuuuU");
		count++;
		if(count % 2 == 0){
			transRect();
			console.log("hi");
		}//end of if
	}//end of if
	else{
		console.log("else");
		clearInterval(inter);
		setTimeout( function(){
			transRect();

			setTimeout( function(){
				blackRect();
				actualBOOM();
			},200);

		},100);
	}//end of else
//	speck(x-10,y-10,color);
}//end` of preBOOM

function reInit(){
	// to reinitialize some variables....
	sy = HEIGHT;
	count = 0;
}//end of reInit

function mouse(mevent){
	//to trace mouse movements (jquery)
	x = mevent.pageX;
	y = mevent.pageY;
	console.log("x is " + x +  " y is " + y);
	inter = setInterval(preBOOM,40);
	reInit();
}//end of mouse mevent function

$(document).click(mouse);

function init(){
	blackRect();
}//end of init function


init();
