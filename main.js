function preload() {
	world_start = loadSound("world_start.wav");
	coin_collect=loadSound("coin.wav");
	gameend=loadSound("gameover.wav");
	lift=loadSound("jump.wav");
	kicked=loadSound("kick.wav");
	dead=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	video.size(640,300);
	video.parent("game_console");
	poseNet=ml5.poseNet(video,modellLoaded);
poseNet.on("pose",gotPoses);
}
function modellLoaded(){
	console.log("go on");
}
function gotPoses(results){
if(results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}
function draw() {
	game();
}






