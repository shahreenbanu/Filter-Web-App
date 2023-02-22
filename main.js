function preload() {

}
function setup() {
canvas = createCanvas(600,600);
camera = createCapture(VIDEO);
camera.hide();
}
function draw() {
image(camera,0,0,600,600);
}