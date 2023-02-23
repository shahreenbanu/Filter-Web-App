

function preload() {

}
function setup() {
canvas = createCanvas(600,600);
camera = createCapture(VIDEO);
camera.hide();
poseNet = ml5.poseNet(camera,modelLoaded);
poseNet.on('pose',gotResults);
}
function draw() {
image(camera,0,0,600,600);
}
function modelLoaded() {
console.log("pose net model is loaded");
}
function gotResults(results) {
   console.log(results);
   lips_x = results[0].pose.nose.x;
lips_y = results[0].pose.nose.y;
console.log(lips_x,lips_y);
}