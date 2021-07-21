let card0 = {
  suit: 'Hearts',
  number: 9
}//end card0

let card1 = {
  suit: 'Spades',
  number: 3
}

function findHighestValue(cardToCheck) {
console.log('in findHighestValue'), cardToCheck;
if (cardToCheck.number > card1.number){
  return card0;
}
  else if (cardToCheck.number < card1.number){
    return card1;
  }
}
console.log(findHighestValue(card1));
