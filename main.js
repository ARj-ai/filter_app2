nose_x = 0;
nose_y = 0;

function preload(){

}

function setup(){
canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses)

}

function draw(){
    image(video, 0, 0, 500, 500);
}

function snap(){
    save("mustache filter.png");
}

function modelLoaded(){
    console.log("Model loaded");
}

function gotPoses(results){
    console.log(results)
}