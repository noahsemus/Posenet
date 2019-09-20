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
let texHead;
let texHand;
let handy;
let heady;

function preload(){
  texHead = createImg(['GIFsJYP/eyes.gif']);
  texHandL = createImg(['GIFsJYP/cashmoney.gif'])
  texHandR = createImg(['GIFsJYP/kachow.gif'])
  texShoulderL = createImg(['GIFsJYP/pam.gif'])
  texShoulderR = createImg(['GIFsJYP/maria.gif'])
  texKneeL = createImg(['GIFsJYP/andrea.gif'])
  texKneeR = createImg(['GIFsJYP/claudia.gif'])
  texAnkleL = createImg(['GIFsJYP/nick.gif'])
  texAnkleR = createImg(['GIFsJYP/rebecca.gif'])  
  texHipL = createImg(['GIFsJYP/bearboy.gif'])
  texHipR = createImg(['GIFsJYP/woop.gif'])
  mario = createImg(['GIFsJYP/mario.jpg'])
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
  //scale(-1,1);
  
  background(0);
  
  angleMode(DEGREES);
  
  imageMode(CORNER);
  
  image(mario,0,0,windowWidth, windowHeight);
  
  
  
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
  
  //HEAD
  texHead.position(noseX-d*5/2, noseY-d*5/2);
  texHead.size(d*3,d*3);
  //L HAND
  texHandL.position(wristLX-d*5/2, wristLY-d*5/2);
  texHandL.size(d*3,d*3);
  //R HAND
  texHandR.position(wristRX-d*5/2, wristRY-d*5/2);
  texHandR.size(d*3,d*3);
  //L SHOULDER
  texShoulderL.position(shoulderLX-d*5/2, shoulderLY-d*5/2);
  texShoulderL.size(d*3,d*3);
  //R SHOULDER
  texShoulderR.position(shoulderRX-d*5/2, shoulderRY-d*5/2);
  texShoulderR.size(d*3,d*3);
  //L KNEE
  texKneeL.position(kneeLX-d*5/2, kneeLY-d*5/2);
  texKneeL.size(d*3,d*3);
  //R KNEE
  texKneeR.position(kneeRX-d*5/2, kneeRY-d*5/2);
  texKneeR.size(d*5,d*5);
  //L ANKLE
  texAnkleL.position(ankleLX-d*5/2, ankleLY-d*5/2);
  texAnkleL.size(d*3,d*3);
  //R ANKLE
  texAnkleR.position(ankleRX-d*5/2, ankleRY-d*5/2);
  texAnkleR.size(d*3,d*3);
  //L HIP
  texHipL.position(hipLX-d*5/2, hipLY-d*5/2);
  texHipL.size(d*3,d*3);  
  //R HIP
  texHipR.position(hipRX-d*5/2, hipRY-d*5/2);
  texHipR.size(d*3,d*3);
}