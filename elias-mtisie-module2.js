/////CHALLENGE 1//////////
const name = "Elias";
// Data type: string. I used const because the value does not need to be reassigned.
let age=21;
// Data type: number. I used let because my age will change over time.
let enjoyingJavaScript = false;
// Data type: boolean. I used let because this value could change as I continue learning JavaScript.
let myFavTemp = 20.1;
//datatype is let because weather can change overtime
const notANumber = 0 / 0;
// Data type: number. I used const because I do not need to reassign this value.
const infiniteValue = 1 / 0;
// Data type: number. I used const because I do not need to reassign this value
const emptyValue = null;
// Data type: null. I used const because I do not need to reassign this value.

// Challenge 2: Explain typeof and its surprises

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof "42");
console.log(typeof (typeof 42));
console.log(typeof [1, 2, 3]);
console.log(typeof function() {});


// Unexpected result: typeof null is "object"
// I expected null to return "null" because null represents an empty value.
// However, JavaScript returns "object" for null.
// This is a historical behavior that was kept for backwards compatibility.


// Unexpected result: typeof NaN is "number"
// NaN means "Not a Number", but its data type is still number.
// NaN is a special numeric value that represents an invalid or undefined
// mathematical result, such as 0 / 0.


// Unexpected result: typeof (typeof 42) is "string"
// typeof 42 returns "number".
// The result "number" is itself a string, so using typeof on it returns "string".


// Unexpected result: typeof [1, 2, 3] is "object"
// Arrays are technically objects in JavaScript.
// typeof does not have a separate "array" result.
// To check if something is specifically an array, we can use Array.isArray().


// "typeof NaN is equal to number because NaN is a special value within the
// JavaScript number type. It represents a failed or invalid numeric result.
// typeof null returns object because of an old historical behavior in
// JavaScript. It is generally considered a language quirk rather than a
// useful design choice, but changing it now could break existing JavaScript
// code. So these aren't normal bugs that JavaScript is going to fix; they are
// established behaviors that developers need to understand."
