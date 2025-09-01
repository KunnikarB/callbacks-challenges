// ✅ DONE Challenge 1
/* 
Function that accepts one number and adds 2 to it
*/
// The parameter num is explicitly typed as number.
// The return type is also number.
function addTwo(num: number): number {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
 console.log(addTwo(10));


 // DONE ✅ Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
// Add type string and return type also string
function addS(word: string): string {
  return word + "s";
}

// Test
console.log(addS("pizza"));
console.log(addS("bagel"));

// ✅ DONE - Challenge 3
/* 
Create a function called map that takes two inputs:
1. an array of numbers
2. a 'callback' function - applied to each element of the array
Return a new array filled with numbers from the callback.
*/

// Add an array of number[]
function map(array: number[], callback: (num: number) => number): number[] {

  // Add an array of number[]
  const newArr: number[] = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}
// Test
console.log(map([1, 2, 3], addTwo)); 
