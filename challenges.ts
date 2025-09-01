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
console.log('********** Challenge 1 **********');
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
console.log('********** Challenge 2 **********');
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
console.log('********** Challenge 3 **********');
console.log(map([1, 2, 3], addTwo)); 

// DONE ✅ Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
*/

// Add <T> generic type to works with any type
// The input is an array of type T (T[])
// callback takes one element of type T and returns nothing (void)
function forEach<T>(array:T[], callback: (item: T) => void): void {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
let alphabet = "";

const letters = ["a", "b", "c", "d"];

forEach(letters, function (char) {
  alphabet += char;
});

console.log('********** Challenge 4 **********');
console.log(alphabet);

// DONE ✅ Challenge 5
/* 
In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.
*/

// Rebuild map as mapWith
function mapWith<T, U>(array: T[], callback: (item: T) => U): U[] {

  const newArr: U[] = [];

  forEach(array, (item) => {
    newArr.push(callback(item));
  });
  return newArr;
}
console.log('********** Challenge 5 **********');
console.log(mapWith([1, 2, 3], addTwo));