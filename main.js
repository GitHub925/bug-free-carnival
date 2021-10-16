var lwristx=""
var lwristy=""
var rwristx=""
var rwristy=""
var song=""
var volume
var rate
function preload(){
song=loadSound("sound.mp3");
}

function setup(){
    canvas=createCanvas(500, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lwristy=results[0].pose.leftWrist.y;
        lwristx=results[0].pose.leftWrist.x;
        rwristx=results[0].pose.rightWrist.x;
        rwristy=results[0].pose.rightWrist.y;
        console.log(rwristy);
        console.log(lwristy);
        console.log(rwristx);
        console.log(lwristx);
    }
}

function modelLoaded(){
    console.log("gooorbagooorba")
}



function draw(){
    image(video, 30,30, 440, 340);

    fill('lightseagreen');
    stroke('navy');
    circle(lwristx,lwristy,20)
    InNumberlwristy=Number(lwristy);
    removedecimals=floor(InNumberlwristy);
    volume=removedecimals/500;
    document.getElementById("vol").innerHTML="Volume: "+volume
    song.setVolume(volume)
}

function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}