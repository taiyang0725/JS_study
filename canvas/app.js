/**
 * Created by lianghao on 2016/3/11.
 */

var canvas;
var stage;//舞台
var txt;
var count=0;
window.onload = function () {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    txt = new createjs.Text("number-->", "20px Arial", "#ff0000");
    stage.addChild(txt);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",handleTick);
}

function handleTick(e){
    count++;
    txt.text="number-->"+count;
    stage.update();
}