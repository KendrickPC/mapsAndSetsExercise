// Maps and Sets Exercise

// Quick Question #1
// What does the following code return?
const question1 = new Set([1,1,2,2,3,4])
// Set(4) { 1, 2, 3, 4 }

// Quick Question #2
// What does the following code return?
const question2 = [...new Set("referee")].join("");
// 'ref';

// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
// Map(1) {[1, 2, 3] => true}
// key === [1, 2, 3] value === true;
m.set([1,2,3], false);
// Map(1) {[1, 2, 3] => false}
// key === [1, 2, 3] value === false

// hasDuplicate
// Write a function called hasDuplicate which accepts
// an array and returns true or false if that array
// contains a duplicate
const hasDuplicate = (arr) => {
  const results = new Set(arr);
  return results.size === arr.length ? false : true;
}
console.log("\nhasDuplicates:")
console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false

// vowelCount
// Write a function called vowelCount which accepts a
// string and returns a map where the keys are numbers
// and the values are the count of the vowels in the
// string.
const vowelCount = (str) => {
  const vowelMap = new Map();
  const vowels = 'aeiouAEIOU';
  for (let char of str) {
    if (vowels.includes(char) === true) {
      if (vowelMap.has(char) === true) {
        vowelMap.set(char.toLowerCase(), vowelMap.get(char) + 1)
      } else {
        vowelMap.set(char.toLowerCase(), 1);
      }
    }
  }
  return vowelMap;
}
console.log("\nvowelCount: ")
console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }
console.log(vowelCount('OWEn wIlson'))