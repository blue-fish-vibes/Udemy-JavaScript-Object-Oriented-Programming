/**
 * CHALLENGE 7-5: TASK
 *
 * Create new class "CustomArray" that should extend built-in "Array".
 *
 * Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * It should perform following actions:
 * 1. Add new element to the existing array
 * (don't use "push" method for this)
 * 2. Modify "length" property of the array (increment it)
 * 3. Log following line to the console:
 * "New element <ELEMENT> was just added to the array"
 *
 * Create instance of the new "CustomArray" class and test new method "customPush" and compare it with "push"
 *
 * What will happen if name of the custom method in the "CustomArray" class will be also "push" instead of "customPush"?
 * Try this.
 */
class CustomArray extends Array {
  customPush(val) {
    this[this.length] = val;
    console.log(`New element ${val} was just added to the array`);
  }
}

test = new CustomArray(1,2,3);
test.customPush(4);
console.log(test);
console.log(test.length);