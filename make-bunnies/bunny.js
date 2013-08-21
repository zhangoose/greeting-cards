// for the bunny/poop objects

function Bunny(xCoord, yCoord, type, id){
	
	this.xCoord = xCoord; //center x
	this.yCoord = yCoord; // center y
	this.type = type; //type = color of bunny or poop, taken from the arrayBunniez from script.js
	this.id = id;;

}//end of Bunny object initializer

function printBunnyArray(bunnyArr){
	var lengthArray=  bunnyArr.length;
	var i;
	var ret; //string your'e returning

	for(i = 0; i < lengthArray; i++){
		if(bunnyArr[i] != null){
			ret = ret + "xCoord:" + bunnyArr[i].xCoord	+ " yCoord:" + bunnyArr[i].yCoord + " type:" + bunnyArr[i].type + " className:" + bunnyArr[i].id + "\n";
		}//end of if 

	}//end of for
	return ret;
}//end of printBunnyArray

