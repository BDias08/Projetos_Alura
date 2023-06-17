// Images Code

let roadImage;
let actorImage;
let carImage;
let car2Image;
let car3Image;

// Sounds Code

let soundsPoints;
let collisionSound;
let soundTrack;

function preload(){
  roadImage = loadImage("Image/estrada.png");
  actorImage =loadImage("Image/ator-1.png");
  carImage = loadImage("Image/carro-1.png");
  car2Image = loadImage("Image/carro-2.png");
  car3Image =loadImage("Image/carro-3.png");
  carsImage = [carImage, car2Image, car3Image, car2Image, carImage, car3Image];

  soundsPoints = loadSound("Sounds/pontos.wav");
  collisionSound = loadSound("Sounds/colidiu.mp3");
  soundTrack = loadSound("Sounds/trilha.mp3");

}

