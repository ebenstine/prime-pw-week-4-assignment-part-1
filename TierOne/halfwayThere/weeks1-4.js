const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats(){
  console.log('in enoughSeats');
  //check if seatsInCar >= number of passengers
  if(seatsInCar >= passengers.length){
    return true;
  } //end enough seats
  else{
    return false;
    }// end not enough seats
}//enoughSeats

function getInCar (nameOfPassenger){
  console.log('in getInCar', nameOfPassenger);
  //push this new passenger into our passengers array
  passengers.push(nameOfPassenger);
  return passengers;
}//endgetInCar

function readyForRoadTrip(){
  if (enoughSeats() && tankFull){
    return true;
  }//end all good
  else{
    return false;
  }//not ready
}//endreadyForRoadTrip


getInCar ('You');
getInCar ('Me');
getInCar ('Malcolm');
getInCar ('TwinBabies');



enoughSeats();
console.log(enoughSeats() );

console.log('are we ready to roll?', readyForRoadTrip() );
