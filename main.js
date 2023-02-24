lips_x = 0 ;
lips_y = 0 ;

function preload() {
img = loadImage("https://i.postimg.cc/bYFLVfWT/pngtree-red-lips-pattern-illustration-image-1412787-removebg-preview.png")
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
image(img,lips_x,lips_y,90,80);
}
function modelLoaded() {
console.log("pose net model is loaded");
}
function gotResults(results) {
   if(results.length > 0) {
      console.log(results);
      lips_x = results[0].pose.nose.x-45;
   lips_y = results[0].pose.nose.y+33;
   console.log(lips_x,lips_y);
   document.getElementById("warning").innerHTML="";
   }
   else {
      document.getElementById("warning").innerHTML="Please be in front of camera while taking a pic";
   }
   
}

function save_pic() {
   save("Pic.png");
}