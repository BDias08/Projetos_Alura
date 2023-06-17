let xCars = [550, 550, 550, 550, 550, 550];
let yCars = [40, 96, 150, 210, 270, 318];
let carsSpeed = [3, 3.5, 4, 4.5, 4.3, 5];
let carsWidth = 50;
let carsHeight = 40;

function viewCar(){
  for(let i = 0; i < carsImage.length; i++){
  image(carsImage[i],xCars[i],yCars[i], carsWidth, carsHeight );
  }
}

function moveCar(){
  for(let i = 0; i < carsSpeed.length; i++)
  xCars[i] -= carsSpeed[i];
}

function backToStartingPosition(){
  for(let i = 0; i < carsImage.length; i++){
  if (wentThroughTheScreen(xCars[i])){
    xCars[i] = 600;
  }
  }
}

function wentThroughTheScreen(xCars){
 return xCars < - 50
}


