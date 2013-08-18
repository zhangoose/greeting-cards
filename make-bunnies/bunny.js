// for the bunny/poop objects

function Bunny(xCoord, yCoord, type){
	
	this.xCoord = xCoord; //center x
	this.yCoord = yCoord; // center y
	this.type = type; //type = color of bunny or poop, taken from the arrayBunniez from script.js

}//end of Bunny object initializer

function printBunnyArray(bunnyArr){
	var lengthArray=  bunnyArr.length;
	var i;
	var ret; //string your'e returning

	for(i = 0; i < lengthArray; i++){
		ret = ret + "xCoord:" + bunnyArr[i].xCoord	+ " yCoord:" + bunnyArr[i].yCoord + " type:" + bunnyArr[i].type + "\n";

	}//end of for
	return ret;
}//end of printBunnyArray

