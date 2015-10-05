function myFunction() {
    window.alert(5 + 6);
}

window.onload = function(){
	var canvas = new Raphael(document.getElementById('element'), width, height); //second option  
	var circle = canvas .circle(125, 125, 50);  
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");
// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");
};

function drawcircle(div, text) { 
    var paper3 = Raphael(div, 26, 26); //<<
    var circle3 = paper3.circle(13, 13, 10.5);
    circle3.attr("stroke", "#f1f1f1");
    circle3.attr("stroke-width", 2);
    var text3 = paper3.text(12, 13, text); //<<
    text3.attr({'font-size': 15, 'font-family': 'FranklinGothicFSCondensed-1, FranklinGothicFSCondensed-2'});
    text3.attr("fill", "#f1f1f1");
}

var r = 0;
var g = 0;
var b = 0;

function onTick() {
  var name = "avi";
  var x = window.innerWidth;
  var y = window.innerHeight;

  //window.alert(x + ", " + y);
  //window.alert(name);
  

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	aviFunction("hello Avi from param");
	ctx.beginPath();
	ctx.arc(x/2, y/2, 80, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.closePath();
	ctx.fillStyle='rgb(' + r + ',' + g + ',' + b + ')';
	adjustValues();
	ctx.fill();
	//window.alert(r + ", " + g + ", " + b);
}

function aviFunction(text) {
	//window.alert(text);
}

function adjustValues() {
	if (r > 255) {
		r = 52;
	} else {
		r = r + 2;
	}

	if (g > 255) {
		g = 86;
	} else {
		g = g + 3;
	}

	if (b > 255) {
		b = 22;
	} else {
		b = b + 1;
	}
}

