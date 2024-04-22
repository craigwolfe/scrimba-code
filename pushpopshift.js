let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
const shifted = largeCountries.shift("Tuvalu"); // remove Tuvalu
const unshifted = largeCountries.unshift("China"); // add China to beginning of array
const popped = largeCountries.pop(); // removes Monaco from end of array. last element removed
const pushed = largeCountries.push("Pakistan"); // puts Pakistan at end of array.
console.log(largeCountries);

for (let i = 0; i < largeCountries.length; i++) console.log(largeCountries[i]);

//shift removes first element in array
//unshift adds element to first in array
//push puts an element at end of array
//pop removes last element in array
