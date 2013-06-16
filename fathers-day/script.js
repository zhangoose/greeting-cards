var str = "happy father's day ";
var count = 0;
var mod; // the % 18 of count... which letter to output? I guess? 
var LENGTH = str.length; // how to know which character to print out
var inter;
var idd = "0"; //counter for spans...
var iddNum = parseInt(idd);
var soFar;
//console.log(parseInt(bloop,10) + 1);

function textGen(){
  
	
	soFar = document.getElementById(idd).innerHTML;
	document.getElementById(idd).innerHTML = soFar + str.charAt(count % LENGTH);
	soFar = document.getElementById(idd).innerHTML;
	count++;
}//end of textGen

function mdown(mevent){
	var randomSize = Math.floor(12 + Math.random()*60).toString();
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor);
	document.getElementById(idd).style.fontSize = randomSize + "px";
	document.getElementById(idd).style.color="#" + randomColor;
	document.getElementById(idd).style.lineHeight = "70%";
	
	
	// click --> generate more text yeah loops
	inter =setInterval(textGen,100);
	
}//end of mdown event function

function mup(mevent){
	count = 0;
	clearInterval(inter);
	
	
	document.getElementById(idd).innerHTML = soFar + "</span><span id='" + (iddNum+1).toString() + "'>";
	soFar = document.getElementById(idd).innerHTML;
	console.log(soFar);
	iddNum++;
	idd = iddNum.toString();
	
}//end of mup event function 

$(document).mousedown(mdown);
$(document).mouseup(mup);




