var x;
var y;
var counter = 0; // going to increment with every bunny
var sofar; // the innerHTML so far
var bunniez = new Array(); //use .push() to add to this array of Bunny obj's
var killCount = 0;

//ffffff links spam 
/*
var blue = "http://25.media.tumblr.com/6a9efaa3e5b3011f6fec54d3f0461bf6/tumblr_mqf6wcdnVb1qg6u97o1_250.gif";
var green = "http://24.media.tumblr.com/e69da932f902bea33e68e6fb065446d9/tumblr_mqf6wcdnVb1qg6u97o2_250.gif";
var orange = "http://24.media.tumblr.com/d075c60ad29c8009d5d9949800338c25/tumblr_mqf6wcdnVb1qg6u97o3_250.gif";
var pink = "http://31.media.tumblr.com/302cd79b992516a9ea7a6f6872aeb380/tumblr_mqf6wcdnVb1qg6u97o4_250.gif";
var purple = "http://24.media.tumblr.com/3828667eeb9eaa2023513ed9e1f2f70b/tumblr_mqf6wcdnVb1qg6u97o5_250.gif";
var yellow = "http://25.media.tumblr.com/a1cc547defee59361e5eaeee958b885a/tumblr_mqf6wcdnVb1qg6u97o6_250.gif";
var poop = "http://24.media.tumblr.com/8ba6048812a4c9932bed1c7dbae956b6/tumblr_mqf6wcdnVb1qg6u97o7_r1_250.gif";
*/
//end of links spam

var blue = "images/blue.gif";
var green = "images/green.gif";
var orange = "images/orange.gif";
var pink = "images/pink.gif";
var purple = "images/purple.gif";
var yellow = "images/yellow.gif";
var poop = "images/poop.gif";


function actualRemoval(bunnyTarget){
	// the process of actually removing a bunny (from the page!!!)
	var jQueryFormatID = "#" + bunnyTarget.id;
	//$(jQueryFormatID).style.display = "none";
	$(jQueryFormatID).fadeOut("slow");
	console.log("I removed " + jQueryFormatID);

	//toggle killCount visibility
	
}//end of actualRemoval

function destroyRadius(bunnyArray, thePoop){
	//linear searches through the bunny array 
	//splices the elements that are in that radius of destruction
	//ignores poop and non-radius bunnies
	//calls actualRemoval
		
	var i;
	console.log("hi my name is poop and I'm at " + thePoop.xCoord + " hmu <3");
	for(i = 0; i < bunnyArray.length; i++){
		if(Math.abs(bunnyArray[i].xCoord - thePoop.xCoord) <= 100
				&& bunnyArray[i].type != poop
				&& bunnyArray[i].isDead == false){

			console.log("hey you're close, " + bunnyArray[i].id + " xcoord of " + bunnyArray[i].xCoord);

			killCount++;
			$("#count").show();
			$("#count").text("KILLED: " + killCount);
			setTimeout(function(){
				$("#count").hide();
			},1500);

			//css
			actualRemoval(bunnyArray[i]);
			bunnyArray[i].isDead = true;	
			// splicing
			/*
			bunnyArray.splice(i,1);	
			i--;
			counter--;
			*/
			
		}//end of if need to remove 
	}//end of for 
	return bunnyArray;
}//end of destroyRadius function

function randomBunniez(){
	// returns a src!!! yay
	var randomIndex = Math.floor(Math.random()*7); // index 0 - 6
	var arrayBunniez = new Array();
	arrayBunniez[0] = blue;
	arrayBunniez[1] = green;
	arrayBunniez[2] = orange;
	arrayBunniez[3] = pink;
	arrayBunniez[4] = purple;
	arrayBunniez[5] = yellow;
	arrayBunniez[6] = poop;
	return arrayBunniez[randomIndex];

}//end of randomBunniez()

function mdown(mevent){
	$("#intro").css("display","none");

	x = mevent.pageX;
	y = mevent.pageY;
	
	makeBunniez(x,y);
}//end of mdown

function makeBunniez(xCoord, yCoord, src){
	xCoord = xCoord -50;//center
	yCoord = yCoord -50;//center
	sofar = document.getElementById('bg').innerHTML;
	var tempRand = randomBunniez();
	document.getElementById('bg').innerHTML = 
		sofar + "<img class='bunny' id='" + counter + "' src='" + tempRand + "'>";
	var bunbun = document.getElementById(counter);
	bunbun.style.left=xCoord+"px";
	bunbun.style.top=yCoord+"px";
	bunbun.style.width="7%";
	bunbun.style.height="auto";

	// populating the bunniez array
	var tempBun = new Bunny(xCoord, yCoord, tempRand, counter);	
	bunniez.push(tempBun);


	//check if it's a poop
	if(bunniez[counter].type == poop){
		console.log("yay poopers");
		//start looping thru & destroying bunnies
		bunniez = destroyRadius(bunniez,bunniez[counter]);	
	}//end of if pooop
	else{
		console.log("uh no");
	}

	console.log(printBunnyArray(bunniez));
	counter++;
}//end of makeBunniez

$(document).mousedown(mdown);

