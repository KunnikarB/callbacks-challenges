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