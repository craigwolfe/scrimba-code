let hands = ["rock", "paper", "scissor"];

function randomHands() {
  const handIndex = Math.floor(Math.random() * 3); // gets random rounded number 0-2
  return hands[handIndex];
  //uses handIndex as the index for hands array
}

console.log(randomHands());
//console logs function
