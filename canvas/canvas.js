/**
 * Created by lianghao on 2016/3/11.
 */

var CANVAS_WIDTH = 2000, CANVAS_HEIGHT = 2000;

var myCanvas,context;

window.onload = function () {

    createCanvas();
    //draw();
    drawImage();

}
//<canvas id="mycanvas" width="200" height="200"></canvas>
function createCanvas() {
    document.body.innerHTML = "<canvas id=\"myCanvas\" width=\"" + CANVAS_WIDTH + "\" height=\"" + CANVAS_HEIGHT + "\" ></canvas>";

    myCanvas=document.getElementById("myCanvas");
    context=myCanvas.getContext("2d");
}

function draw(){
    context.fillStyle="#ff0000"
    context.fillRect(0,0,200,200);
}

function drawImage(){
    var img=new Image();
    img.onload=function(){
        context.drawImage(img,0,0);
    }
    img.src="1.jpg";

}

