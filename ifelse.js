let age = 65;
let discount = "";
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
function ageConditional() {
  if (age < 6) {
    discount = "Free!";
  } else if (age < 18) {
    discount = "Child Discount";
  } else if (age < 26) {
    discount = "Student Discount";
  } else if (age < 66) {
    discount = "Full Price";
  } else {
    discount = "Senior Citizen Discount";
  }
}

ageConditional();
console.log(discount);
