Video="";
Status="";

function preload() {
    Video=createVideo("video.mp4");
    Video.hide();
}

function setup() {
    canvas=createCanvas(640,480);
    canvas.center();
}

function draw() {
    image(Video,0,0,640,480);
}

function start() {
    object_detector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("Status").innerHTML="Staus:Detecting Objects"
}

function modelloaded() {
    console.log("model loaded");
    Status=True;
    video.loop();
    video.speed(1);
    video.volume(1);
}