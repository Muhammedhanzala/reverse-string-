// // Function to reverse a string
// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   // Function to check if a string is a palindrome
//   function isPalindrome(str) {
//     return str === reverseString(str);
//   }
  
//   // Function to check data type of user input
//   function checkDataType(input) {
//     return typeof input;
//   }
  
//   // Function to check if an array is consistent
//   function isArrayConsistent(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i + 1] - arr[i] !== 1) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   // Example usage:
  
//   // Reverse the string "Superman"
//   console.log(reverseString("Superman"));
  
//   // Check if "racecar" is a palindrome
//   console.log(isPalindrome("racecar")); // true
  
//   // Ask for user input and check its data type
//   let userInput = prompt("Enter something:");
//   alert("Type: " + checkDataType(userInput));
  
//   // Check if the array [1,2,3,5,6,7] is consistent
// document.log(isArrayConsistent([1,2,3,5,6,7])); // false




// // Reverse the string
// const originalString = "Superman";
// const reversedString = originalString.split('').reverse().join('');
// alert("Reversed String:", reversedString);

// // Check if the string is palindrome or not
// const isPalindrome = originalString.toLowerCase() === reversedString.toLowerCase();
// alert("Is Palindrome:", isPalindrome);

// // Ask for user input and check data type
// const userInput = prompt("Enter something:");
// alert("Type of Input:", typeof userInput);

// // Check if the given array is consistent or not
// const isConsistent = (arr) => {
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const exampleArray = [1, 2, 3, 5, 6, 7];
// alert("Is Array Consistent:", isConsistent(exampleArray));


// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to check if a string is palindrome
function isPalindrome(str) {
  return str === reverseString(str);
}

// Function to check the type of input
function checkInputType(input) {
  if (isNaN(input)) {
    return "type: string";
  } else {
    return "type: number";
  }
}

// Function to check if an array is consistent
function isConsistentArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return false;
    }
  }
  return true;
}

// Input from the user
const userInput = prompt("Enter a string or number:");

// Reversing the string
const reversedString = reverseString(userInput);
console.log("Reversed string:", reversedString);

// Checking if the input is palindrome
console.log("Is Palindrome:", isPalindrome(userInput));

// Checking the type of input
console.log(checkInputType(userInput));

// Checking if the given array is consistent
const testArray = [1, 2, 3, 5, 6, 7];
console.log("Is Array Consistent:", isConsistentArray(testArray));