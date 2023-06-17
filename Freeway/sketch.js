function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(roadImage);
  viewCar();
  viewActor();
  moveCar();
  moveActor();
  backToStartingPosition();
  wentThroughTheScreen();
  collisionVerification();
  addPoints();
  markPoint();
}