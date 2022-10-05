img = "";
status = "" ;

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded) ;
    document.getElementById("status").innerHTML = "Status : Detecting Objects" }

function draw() {
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    text("Dog", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 60, 450, 350);

    fill("#120000");
    text("Cat", 320 , 120);
    noFill();
    stroke("#121322");
rect(300,90,270,320);
}

function modelLoaded() 
{
    console.log("Model is not loaded!! jk it's loaded")
    status = true ;
    objectDetector.detect(img, gotResult);
}

function gotResult (error,result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
}