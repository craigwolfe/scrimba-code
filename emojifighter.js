let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

  let emojiIndexOne = Math.floor(Math.random() * fighters.length);
  let emojiIndexTwo = Math.floor(Math.random() * fighters.length);
  //get random item in array twice for two different variables
  stageEl.textContent =
    fighters[emojiIndexOne] + " " + "vs" + " " + fighters[emojiIndexTwo];
  //add emojis to stageEl id element
});
