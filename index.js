/**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, element) => sum + element);
  }

  onlyNumbers() {
    return this.filter(element => typeof element === "number");
  }  
}

const sumTest = new ExtendedArray(1,2,3);
const onlyNumbersTest = new ExtendedArray(1,2,3,'a','b','c');

console.log(sumTest.sum());
console.log(onlyNumbersTest.onlyNumbers());