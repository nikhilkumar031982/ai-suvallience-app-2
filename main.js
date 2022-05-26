video="";
status="";

function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function setup(){
   canvas= createCanvas(480,380);
   canvas.center();
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
    
    
}

 function start(){
     objectdetector=ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML="status:detecting objects";
 }



 function draw(){
     image(video,0,0,480,380);
     

 }