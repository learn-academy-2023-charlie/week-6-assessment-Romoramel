// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

test("Test hitchhikersCharacters", () => {
  expect(hitchhikersCharacters.length).toBe(3);
  expect(hitchhikersCharacters[0].name).toBe("ford prefect");
  expect(hitchhikersCharacters[1].occupation).toBe("president of the galaxy");
  expect(hitchhikersCharacters[2]).toEqual({ name: "arthur dent", occupation: "a radio employee" });
});

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
];

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// pseudo code: 
// input: an array of objects
// output/return: an array with a sentence about each person with their name capitalized.
// the filterHitchhikers function takes an array of characters as a parameter. It uses the filter method to create a new array that only includes these characters "a hitchhiker". The function then returns this filtered array.

// b) Create the function that makes the test pass.

  function filterHitchhikers(characters) {
  return characters.filter(character => character.occupation === "a hitchhiker");
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

test("Test hodgepodge1", () => {
  const filteredArray = hodgepodge1.filter(item => typeof item === "number");
  const transformedArray = filteredArray.map(item => item >= 0 ? Math.floor(item / 10) : -1);
  expect(transformedArray).toEqual([2, 0, -1, 0]);
});

test("Test hodgepodge2", () => {
  const filteredArray = hodgepodge2.filter(item => typeof item === "number");
  const transformedArray = filteredArray.map(item => item >= 0 ? Math.floor(item / 10) : -1);
  expect(transformedArray).toEqual([2, 1, -1]);
});


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

function getRemainders(arr) {
  const numbers = arr.filter(item => typeof item === "number");
  const remainders = numbers.map(number => number % 3);
  return remainders;
}

// pseudo code: 
// input: a mixed data array 
// output/return: an array of only the REMAINDERS of the numbers when divided by 3
// the getRemainders function takes an array (arr) as a parameter. It filters the array to only include elements that are of type "number" using the filter method. Then it maps over the filtered array and calculates the remainder when each number is divided by 3 using the modulo operator (%). then it returns the array of remainders.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

test("Test cubeAndSum1", () => {
  const sum = cubeAndSum1.reduce((total, number) => total + Math.pow(number, 3), 0);
  expect(sum).toEqual(99);
});

test("Test cubeAndSum2", () => {
  const sum = cubeAndSum2.reduce((total, number) => total + Math.pow(number, 3), 0);
  expect(sum).toEqual(1125);
});


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

function cubeAndSum(numbers) {
  const sum = numbers.reduce((total, number) => total + Math.pow(number, 3), 0);
  return sum;
}