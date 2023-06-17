let yActor = 366;
let xActor = 92;
let myPoints = 0;
let collision = false;
    
function viewActor(){
  image(actorImage,xActor,yActor,30,30);
}

function moveActor(){
 if(keyIsDown(UP_ARROW)){
   yActor -= 3;
 }

  
 if(keyIsDown(DOWN_ARROW)){
  if (canMove()){
   yActor += 3;
  }  
 }
}

function collisionVerification(){
  for( let i =0; i < carsImage.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], carsWidth, carsHeight, xActor, yActor, 15)
    if (collision){
       backActorFortartPosition();
       collisionSound.play();
       if(ifPointsBiggerZero()){
       myPoints -= 1;
      }
    }
  }
}

function backActorFortartPosition(){
  yActor = 366;
}

function addPoints(){
  textSize(25);
  fill(color(0,0,0));
  text(myPoints, width / 5, 28);
}

function markPoint(){
  if (yActor < 15){
    soundsPoints.play();
    myPoints += 1;
    backActorFortartPosition();
  }
}
 
  function ifPointsBiggerZero(){
   return myPoints > 0;
 }

function canMove(){
  return yActor < 366 ;
}
