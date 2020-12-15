// function will take in an array, and add the two biggest numbers in the array

const addLargestNumbers = function(data) {
// Put your solution here
  let sum = 0;
  maxNum = Math.max.apply(null, data);
// I have no idea that how to get second largest number.
  secondNum = Math.max.apply(null, data);

  sum = maxNum + secondNum;   
  return sum
};

console.log(addLargestNumbers([1, 10]));
// should return 11
console.log(addLargestNumbers([1, 2, 3]));
// should return 5
console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
// should return 126
