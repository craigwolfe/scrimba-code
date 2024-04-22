let dayOfMonth = 31;
let weekday = "Friday";
let message = "";
// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (weekday === "Friday" && dayOfMonth === 31) {
  message = "Spooky Face";
} else {
  message = "No spooky face";
}

console.log(message);
