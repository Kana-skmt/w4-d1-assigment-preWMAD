/// write a function that counts the number of vowels in a given string and returns that value
// one potential solution may use the charAt() method, but this isnt the only solution
// you may alsop find the .contains() method useful.
//another useful couple of methods could be .split and .join
const vowelCounter = function(data) {
  // Put your solution here
  let vowelsCount = 0;
  let string = data.toString();

  for (i = 0; i <= string.length - 1; i++) {

    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

console.log(vowelCounter("orange"));
// should return 3
console.log(vowelCounter("Cornerstone"));
// should return 4
console.log(vowelCounter("aeiou"));
// should return 5
