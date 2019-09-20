console.log('ml5 version:', ml5.version)
let video;
let poseNet;

//BODY POINTS
let noseX = 0;
let noseY = 0;

let eyeLX = 0;
let eyeLY = 0;

let eyeRX = 0;
let eyeRY = 0;

let wristLX = 0;
let wristLY = 0;

let wristRX = 0;
let wristRY = 0;

let earLX = 0;
let earLY = 0;

let earRX = 0;
let earRY = 0;

let ankleLX = 0;
let ankleLY = 0;

let ankleRX = 0;
let ankleRY = 0;


/*TEXTURES
let eyeL;
let eyeR;
let nose;
let wristL;
let wristR;
let earR;
let earL;
let */


function preload(){
  eyeL = createImg('GIFsMic/eyelash2.gif');
  eyeR = createImg('GIFsMic/eyelash1.gif');
  nose = createImg('GIFsMic/nose.gif');
  wristL = createImg('GIFsMic/flower-1.gif');
  wristR = createImg('GIFsMic/purse.gif');
  earL = createImg('GIFsMic/earlobe2.gif');
  earR = createImg('GIFsMic/eyelobe1.gif');
  ankleL = createImg('GIFsMic/foot1.gif');
  ankleR = createImg('GIFsMic/foot2.gif');
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  video.size(windowWidth, windowHeight);
}

function gotPoses(poses){
  console.log(poses);
  if (poses.length > 0); {
    
    //TRACKING
    //EAR
    let erLX = poses[0].pose.keypoints[3].position.x;
    let erLY = poses[0].pose.keypoints[3].position.y;
    let erRX = poses[0].pose.keypoints[4].position.x;
    let erRY = poses[0].pose.keypoints[4].position.y;
    //NOSE
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    //EYE
    let eLX = poses[0].pose.keypoints[1].position.x;
    let eLY = poses[0].pose.keypoints[1].position.y;
    let eRX = poses[0].pose.keypoints[2].position.x;
    let eRY = poses[0].pose.keypoints[2].position.y;
    //WRIST
    let wLX = poses[0].pose.keypoints[9].position.x;
    let wLY = poses[0].pose.keypoints[9].position.y;
    let wRX = poses[0].pose.keypoints[10].position.x;
    let wRY = poses[0].pose.keypoints[10].position.y;
    //ANKLES 
    let aLX = poses[0].pose.keypoints[15].position.x;
    let aLY = poses[0].pose.keypoints[15].position.y;
    let aRX = poses[0].pose.keypoints[16].position.x;
    let aRY = poses[0].pose.keypoints[16].position.y;
   
    //SMOOTHING
     //EAR
    earLX = lerp(earLX, erLX, 0.2);
    earLY = lerp(earLY, erLY, 0.2);
    earRX = lerp(earRX, erRX, 0.2);
    earRY = lerp(earRY, erRY, 0.2);
    //NOSE
    noseX = lerp(noseX, nX, 0.2);
    noseY = lerp(noseY, nY, 0.2);
    //EYES 
    eyeLX = lerp(eyeLX, eLX, 0.2);
    eyeLY = lerp(eyeLY, eLY, 0.2);
    eyeRX = lerp(eyeRX, eRX, 0.2);
    eyeRY = lerp(eyeRY, eRY, 0.2);
    //WRISTS
    wristRX = lerp(wristRX, wRX, 0.2);
    wristRY = lerp(wristRY, wRY, 0.2);
    wristLX = lerp(wristLX, wLX, 0.2);
    wristLY = lerp(wristLY, wLY, 0.2);
    //ANKLES
    ankleLX = lerp(ankleLX, aLX, 0.2);
    ankleLY = lerp(ankleLY, aLY, 0.2);
    ankleRX = lerp(ankleRX, aRX, 0.2);
    ankleRY = lerp(ankleRY, aRY, 0.2);
  
  }
}

function modelLoaded() {
  console.log('model ready');
}

function draw() {
  background(0);
  
  angleMode(DEGREES);
  
  imageMode(CORNER);
  
  image(video,0,0,windowWidth, windowHeight);
  
  let d = dist(noseX,noseY, eyeLX, eyeLY);
  let deyeL = dist(noseX,noseY, eyeRY, eyeRX);
  
  let dearL = dist(noseX,noseY, earLX, earLY);
  let dearR  = dist(noseX,noseY, earRX, earRY);
  
  let dankleL = dist(wristLX, wristLY, ankleLX, ankleLY);
  let dankle = dist(wristRX, wristRY, ankleRX, ankleRY);
  //let dwrist = dist(wristLX, wristLY, wristRX, wristRY);
  
  
  noStroke();
  
   //L SHOULDER
  earL.position(earLX-d*3/2, earLY-d*3/2);
  earL.size(d*3, d*3);
  //R SHOULDER
  earR.position(earRX-d*3/2, earRY-d*3/2);
  earR.size(d*3, d*3);
  
  //L ANKLE
  ankleL.position(ankleLX-d*5/2, ankleLY-d*5/2);
  ankleL.size(d*3,d*3);
  //R ANKLE
  ankleR.position(ankleRX-d*5/2, ankleRY-d*5/2);
  ankleR.size(d*3,d*3);
  
  //L EYE
  eyeL.position(eyeLX-d*4/2, eyeLY-d*4/2);
  eyeL.size(d*4, d*4);
  //R EYE
  eyeR.position(eyeRX-d*4/2, eyeRY-d*4/2);
  eyeR.size(d*4, d*4);
  
  //NOSE
  nose.position(noseX-d*3/2,noseY-d*3/2);
  nose.size(d*3, d*3);
  
  //L WRIST
  wristL.position(wristLX-d*4/2, wristLY-d*4/2);
  wristL.size(d*4, d*4);
  //R WRIST
  wristR.position(wristRX-d*4/2, wristRY-d*4/2);
  wristR.size(d*4, d*4);
  
}