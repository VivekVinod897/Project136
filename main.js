status = "";

function setup(){
canvas = createCanvas(640 , 420);
canvas.center();

video = createCapture(VIDEO);
video.size(640 , 420);
video.hide();
}

function start(){
objectDetector = ml5.objectDetector('cocossd' ,  modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects"
document.getElementById("input_type").value;
var answer = value;
}

function modelLoaded(){
console.log("model id Loaded");
status = true;
}

function draw(){
image(video , 0 , 0 , 640 , 420);
}