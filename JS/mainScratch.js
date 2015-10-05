
var x;
var y;

var outsideCircle = null;
var insideCircle = null;
var line = null;

window.onload = function () {
    //gather window dimensions
    x = window.innerWidth;
    y = window.innerHeight;
    
    //create Rapahael canvas
    var paper = Raphael(0, 0, x, y);

    outsideCircle = paper.circle(x/2, y/2, 000);      
    line = paper.path( ["M", x/2, y/2, "L", x/2, 200 ] );
    insideCircle = paper.circle(x/2, y/2, 300); 

    outsideCircle.animate({r:400, fill: "red"}, 2000, rotateLine);

    line.attr("stroke-width", "12");
    outsideCircle.attr("fill", "blue");
    insideCircle.attr("fill", "cyan");
    outsideCircle.attr("stroke", "cyan");


    
// Sets the stroke attribute of the circle to white


    
}

function enlargeOuterCircle() {
    outsideCircle.animate({r:400, fill: "red"}, 2000);
}

function rotateLine() {
    var lineRotateAngle = 720;
    var rotateX = x/2;
    var rotateY = y/2;
    var transformStatement = "r".concat(lineRotateAngle).concat(",").concat(rotateX).concat(",").concat(rotateY);
    line.animate({transform: transformStatement}, 5000);
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