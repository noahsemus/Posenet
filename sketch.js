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

let shoulderLX = 0;
let shoulderLY = 0;

let shoulderRX = 0;
let shoulderRY = 0;

let elbowLX = 0;
let elbowLY = 0;

let elbowRX = 0;
let elbowRY = 0;

let hipLX = 0;
let hipLY = 0;

let hipRX = 0;
let hipRY = 0;

let kneeLX = 0;
let kneeLY = 0;

let kneeRX = 0;
let kneeRY = 0;

let ankleLX = 0;
let ankleLY = 0;

let ankleRX = 0;
let ankleRY = 0;


//TEXTURES
let texture01;
let texture02;
let texture03;
let texture04;
let texture05;
let texture06;
let texture07;

let videoTexture;
let bgTexture


let handy;
let heady;

function preload(){
  texture01 = createVideo(['GIFs/picasso.mov']);
  texture01.loop();
  texture01.hide();
  
  texture02 = createVideo(['GIFs/handy.mov']);
  texture02.loop();
  texture02.hide();
  
  texture03 = createVideo(['GIFs/hairGrow.webm']);
  texture03.loop();
  texture03.hide();
  
  texture04 = createVideo(['GIFs/gif00005.webm']);
  texture04.loop();
  texture04.hide();
  
  texture05 = createVideo(['GIFs/gif00001.webm']);
  texture05.loop();
  texture05.hide();
  
  texture06 = createVideo(['GIFs/gif00006.webm']);
  texture06.loop();
  texture06.hide();
  
  texture07 = createVideo(['GIFs/gif00004.webm']);
  texture07.loop();
  texture07.hide();
  
  handy = loadModel('decHand06.obj', true);
  heady = loadModel('headSculpt3.obj', true);
  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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
//  console.log(poses);
  if (poses.length > 0); {
    
    //TRACKING
    //nose
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    
    //eyes
    let eLX = poses[0].pose.keypoints[1].position.x;
    let eLY = poses[0].pose.keypoints[1].position.y;
    
    let eRX = poses[0].pose.keypoints[2].position.x;
    let eRY = poses[0].pose.keypoints[2].position.y;
    
    //wrists
    let wLX = poses[0].pose.keypoints[9].position.x;
    let wLY = poses[0].pose.keypoints[9].position.y;
    
    let wRX = poses[0].pose.keypoints[10].position.x;
    let wRY = poses[0].pose.keypoints[10].position.y;
    
    //shoulders
    let shLX = poses[0].pose.keypoints[5].position.x;
    let shLY = poses[0].pose.keypoints[5].position.y;
    
    let shRX = poses[0].pose.keypoints[6].position.x;
    let shRY = poses[0].pose.keypoints[6].position.y;
    
    //elbows
    let elLX = poses[0].pose.keypoints[7].position.x;
    let elLY = poses[0].pose.keypoints[7].position.y;
    
    let elRX = poses[0].pose.keypoints[8].position.x;
    let elRY = poses[0].pose.keypoints[8].position.y;
    
    //hips
    let hLX = poses[0].pose.keypoints[11].position.x;
    let hLY = poses[0].pose.keypoints[11].position.y;
    
    let hRX = poses[0].pose.keypoints[12].position.x;
    let hRY = poses[0].pose.keypoints[12].position.y;
    
    //knees
    let kLX = poses[0].pose.keypoints[13].position.x;
    let kLY = poses[0].pose.keypoints[13].position.y;
    
    let kRX = poses[0].pose.keypoints[14].position.x;
    let kRY = poses[0].pose.keypoints[14].position.y;
    
    //knees
    let aLX = poses[0].pose.keypoints[15].position.x;
    let aLY = poses[0].pose.keypoints[15].position.y;
    
    let aRX = poses[0].pose.keypoints[16].position.x;
    let aRY = poses[0].pose.keypoints[16].position.y;
    
    //SMOOTHING
    noseX = lerp(noseX, nX, 0.2);
    noseY = lerp(noseY, nY, 0.2);
    
    eyeLX = lerp(eyeLX, eLX, 0.2);
    eyeLY = lerp(eyeLY, eLY, 0.2);
    
    eyeRX = lerp(eyeRX, eRX, 0.2);
    eyeRY = lerp(eyeRY, eRY, 0.2);
    
    wristLX = lerp(wristLX, wLX, 0.2);
    wristLY = lerp(wristLY, wLY, 0.2);
    
    wristRX = lerp(wristRX, wRX, 0.2);
    wristRY = lerp(wristRY, wRY, 0.2);
    
    shoulderLX = lerp(shoulderLX, shLX, 0.2);
    shoulderLY = lerp(shoulderLY, shLY, 0.2);
    
    shoulderRX = lerp(shoulderRX, shRX, 0.2);
    shoulderRY = lerp(shoulderRY, shRY, 0.2);
    
    elbowLX = lerp(elbowLX, elLX, 0.2);
    elbowLY = lerp(elbowLY, elLY, 0.2);
    
    elbowRX = lerp(elbowRX, elRX, 0.2);
    elbowRY = lerp(elbowRY, elRY, 0.2);
    
    hipLX = lerp(hipLX, hLX, 0.2);
    hipLY = lerp(hipLY, hLY, 0.2);
    
    hipRX = lerp(hipRX, hRX, 0.2);
    hipRY = lerp(hipRY, hRY, 0.2);
    
    kneeLX = lerp(kneeLX, kLX, 0.2);
    kneeLY = lerp(kneeLY, kLY, 0.2);
    
    kneeRX = lerp(kneeRX, kRX, 0.2);
    kneeRY = lerp(kneeRY, kRY, 0.2);
    
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
  scale(-1,1);
  
  background(255);
  
  angleMode(DEGREES);
  
  bgTexture = texture05;
  
  if (noseY > windowHeight/2) {
    bgTexture = texture06;
  }
  
  if (noseX < windowWidth/2) {
    bgTexture = texture04;
  }
  
  push();
    translate(0,0,-10);
    texture(bgTexture);
    plane(windowWidth+20, windowHeight+20);
  pop();
  
  //DISTANCES
  
  let d = dist(noseX, noseY, eyeLX, eyeLY);
  let dR = dist(noseX, noseY, eyeRX, eyeRY);
  let dShoulderL = dist(noseX, noseY, shoulderLX, shoulderLY);
  let dShoulderR = dist(noseX, noseY, shoulderRX, shoulderRY);
  let dElbowL = dist(shoulderLX, shoulderLY, elbowLX, elbowLY);
  let dElbowR = dist(shoulderRX, shoulderRY, elbowRX, elbowRY);
  let dWristL = dist(elbowLX, elbowLY, wristLX, wristLY);
  let dWristR = dist(elbowRX, elbowRY, wristRX, wristRY);
  let headRot;
  
  noStroke();
  
  videoTexture = texture01;
  
  if (wristLY > windowHeight/2) {
    videoTexture = texture02;
  }
  
  if (wristRY < windowHeight/2) {
    videoTexture = texture03;
  }
  
  
  //HEAD
  push();
    let headNoseX = noseX-windowWidth/2;
    let headNoseY = noseY-windowWidth/2;
    translate(noseX-windowWidth/2, noseY-windowHeight/2);
    rotateY(0.3*headNoseX);
    rotateX(-headNoseY*0.05);
    rotateZ(180);
    texture(videoTexture);
    scale(d*0.0225)
    model(heady);
  pop();
  
  //LEFT HAND
  push();
    translate(wristLX-windowWidth/2, wristLY-windowHeight/2);
    rotateY(wristLX*0.3);
    rotateX(wristLY*0.3);
    rotateZ(180);
    scale(d*0.0225)
    model(handy);
  pop();
  
  //RIGHT HAND
  push();
    translate(wristRX-windowWidth/2, wristRY-windowHeight/2);
    rotateY(wristRX*0.3);
    rotateX(wristRY*0.3);
    rotateZ(180);
    scale(d*0.0225)
    model(handy);
  pop();
  
  //LEFT SHOULDER
  push();
    translate(shoulderLX-windowWidth/2, shoulderLY-windowHeight/2);
    rotateY(shoulderLX*0.3);
    rotateX(shoulderLY*0.3);
    box(d*1.25);
  pop();
  
  //RIGHT SHOULDER
  push();
    translate(shoulderRX-windowWidth/2, shoulderRY-windowHeight/2);
    rotateY(shoulderRX*0.3);
    rotateX(shoulderRY*0.3);
    box(d*1.25);
  pop();
  
  //LEFT ELBOW
  push();
    translate(elbowLX-windowWidth/2, elbowLY-windowHeight/2);
    rotateY(elbowLX*0.3);
    rotateX(elbowLY*0.3);
    box(d*1.25);
  pop();
  
  //RIGHT ELBOW
  push();
    translate(elbowRX-windowWidth/2, elbowRY-windowHeight/2);
    rotateY(elbowRX*0.3);
    rotateX(elbowRY*0.3);
    box(d*1.25);
  pop();
  
  //LEFT HIP
  push();
    translate(hipLX-windowWidth/2, hipLY-windowHeight/2);
    rotateY(hipLX*0.3);
    rotateX(hipLY*0.3);
    box(d*1.25);
  pop();
  
  //RIGHT HIP
  push();
    translate(hipRX-windowWidth/2, hipRY-windowHeight/2);
    rotateY(hipRX*0.3);
    rotateX(hipRY*0.3);
    box(d*1.25);
  pop();
  
  //LEFT KNEE
  push();
    translate(kneeLX-windowWidth/2, kneeLY-windowHeight/2);
    rotateY(kneeLX*0.3);
    rotateX(kneeLY*0.3);
    box(d*1.25);
  pop();
  
  //RIGHT KNEE
  push();
    translate(kneeRX-windowWidth/2, kneeRY-windowHeight/2);
    rotateY(kneeRX*0.3);
    rotateX(kneeRY*0.3);
    box(d*1.25);
  pop();
  
  //LEFT ANKLE
  push();
    translate(ankleLX-windowWidth/2, ankleLY-windowHeight/2);
    rotateY(ankleLX*0.3);
    rotateX(ankleLY*0.3);
    box(d*1.25);
  pop();
  
  //RIGHT ANKLE
  push();
    translate(ankleRX-windowWidth/2, ankleRY-windowHeight/2);
    rotateY(ankleRX*0.3);
    rotateX(ankleRY*0.3);
    box(d*1.25);
  pop();
  
}