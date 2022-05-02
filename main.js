Video="";
Status="";
Objects=[];

function preload() {
    Video=createVideo("video.mp4");
    Video.hide();
}

function setup() {
    canvas=createCanvas(640,480);
    canvas.center();
}

function start() {
    object_detector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("Status").innerHTML="Staus:Detecting Objects"
}

function modelloaded() {
    console.log("model loaded");
    Status=true;
    Video.loop();
    Video.speed(1);
    Video.volume(1);
}

function getResult(error,results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        Objects=results;
    }
}

function draw() {
    image(Video,0,0,640,480);
    if(Status!="") {
        object_detector.detect(Video,getResult);
        for(i=0;i<Objects.length;i++) {
            fill("yellow");
            percent=floor(Objects[i].confidence*100);
            text(Objects[i].label+" "+percent+"%",Objects[i].x,Objects[i].y);
            noFill();
            rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
            document.getElementById("Status").innerHTML="Status:ObjectsDetected";
            document.getElementById("numberofobjectsdetcted").innerHTML=Objects.length;
        }
    }
}

