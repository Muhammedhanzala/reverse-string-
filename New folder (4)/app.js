

function reverseString(str) {
  return str.split("").reverse().join("");
}


function isPalindrome(str) {
  return str === reverseString(str);
}


function checkInputType(input) {
  if (isNaN(input)) {
    return "type: string";
  } else {
    return "type: number";
  }
}


function isConsistentArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return false;
    }
  }
  return true;
}


const userInput = prompt("Enter a string or number:");


const reversedString = reverseString(userInput);
console.log("Reversed string:", reversedString);


console.log("Is Palindrome:", isPalindrome(userInput));


console.log(checkInputType(userInput));


const testArray = [1, 2, 3, 5, 6, 7];
console.log("Is Array Consistent:", isConsistentArray(testArray));