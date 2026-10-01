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

// Challenge 3: Convert this string to a number, five different ways

let a = "123";
let b = "3.14";
let c = "hello";
let d = "42abc";
let e = "";
let f = 0;
let g = null;
let h = undefined;


// ====================
// a = "123"
// ====================

console.log("===== a: 123 =====");

console.log("Number:", Number(a), typeof Number(a));
console.log("parseInt:", parseInt(a), typeof parseInt(a));
console.log("parseFloat:", parseFloat(a), typeof parseFloat(a));
console.log("Boolean:", Boolean(a), typeof Boolean(a));
console.log("String:", String(a), typeof String(a));


// ====================
// b = "3.14"
// ====================

console.log("===== b: 3.14 =====");

console.log("Number:", Number(b), typeof Number(b));
console.log("parseInt:", parseInt(b), typeof parseInt(b));
console.log("parseFloat:", parseFloat(b), typeof parseFloat(b));
console.log("Boolean:", Boolean(b), typeof Boolean(b));
console.log("String:", String(b), typeof String(b));


// ====================
// c = "hello"
// ====================

console.log("===== c: hello =====");

console.log("Number:", Number(c), typeof Number(c));
console.log("parseInt:", parseInt(c), typeof parseInt(c));
console.log("parseFloat:", parseFloat(c), typeof parseFloat(c));
console.log("Boolean:", Boolean(c), typeof Boolean(c));
console.log("String:", String(c), typeof String(c));


// ====================
// d = "42abc"
// ====================

console.log("===== d: 42abc =====");

console.log("Number:", Number(d), typeof Number(d));
console.log("parseInt:", parseInt(d), typeof parseInt(d));
console.log("parseFloat:", parseFloat(d), typeof parseFloat(d));
console.log("Boolean:", Boolean(d), typeof Boolean(d));
console.log("String:", String(d), typeof String(d));


// ====================
// e = ""
// ====================

console.log("===== e: empty string =====");

console.log("Number:", Number(e), typeof Number(e));
console.log("parseInt:", parseInt(e), typeof parseInt(e));
console.log("parseFloat:", parseFloat(e), typeof parseFloat(e));
console.log("Boolean:", Boolean(e), typeof Boolean(e));
console.log("String:", String(e), typeof String(e));


// ====================
// f = 0
// ====================

console.log("===== f: 0 =====");

console.log("Number:", Number(f), typeof Number(f));
console.log("parseInt:", parseInt(f), typeof parseInt(f));
console.log("parseFloat:", parseFloat(f), typeof parseFloat(f));
console.log("Boolean:", Boolean(f), typeof Boolean(f));
console.log("String:", String(f), typeof String(f));


// ====================
// g = null
// ====================

console.log("===== g: null =====");

console.log("Number:", Number(g), typeof Number(g));
console.log("parseInt:", parseInt(g), typeof parseInt(g));
console.log("parseFloat:", parseFloat(g), typeof parseFloat(g));
console.log("Boolean:", Boolean(g), typeof Boolean(g));
console.log("String:", String(g), typeof String(g));


// ====================
// h = undefined
// ====================

console.log("===== h: undefined =====");

console.log("Number:", Number(h), typeof Number(h));
console.log("parseInt:", parseInt(h), typeof parseInt(h));
console.log("parseFloat:", parseFloat(h), typeof parseFloat(h));
console.log("Boolean:", Boolean(h), typeof Boolean(h));
console.log("String:", String(h), typeof String(h));


// ==========================================================
// Interview Questions
// ==========================================================

// 1. What is the difference between Number("42abc") and
//    parseInt("42abc")?
//
// Number("42abc") returns NaN because Number() expects the
// entire string to represent a valid number.
//
// parseInt("42abc") returns 42 because parseInt() reads the
// number from the beginning of the string and stops when it
// reaches a character that is not part of the number.
//
// Therefore:
// Number("42abc")  -> NaN
// parseInt("42abc") -> 42


// 2. When would you use parseFloat instead of parseInt?
//
// I would use parseFloat when I need to convert a string into
// a number that can contain decimal values.
//
// For example:
// parseInt("3.14")   -> 3
// parseFloat("3.14") -> 3.14
//
// So parseInt is useful when I specifically want an integer,
// while parseFloat is useful when I need to keep the decimal
// part.


// 3. What does Number("") return, and why can this cause bugs?
//
// Number("") returns 0.
//
// This can cause bugs because an empty string might mean that
// the user did not enter anything, but Number() treats it as 0.
//
// For example:
//
// let age = "";
// console.log(Number(age)); // 0
//
// If my application expects an empty input to be invalid,
// blindly using Number() could incorrectly treat the empty
// input as the number 0.

// ==========================================================
// Challenge 4: What does this print? And why?
// ==========================================================


// ==========================================================
// 1. "5" + 3
// ==========================================================

// Prediction:
// It will print "53".
// The result will be a string.
// WHY: The + operator can mean addition or string concatenation.
// Because one value is already a string, JavaScript converts 3
// to a string and joins the two values together.

console.log("5" + 3); // "53"


// ==========================================================
// 2. "5" - 3
// ==========================================================

// Prediction:
// It will print 2.
// The result will be a number.
// WHY: The - operator only performs mathematical subtraction.
// JavaScript converts the string "5" into the number 5.

console.log("5" - 3); // 2


// ==========================================================
// 3. "5" * "2"
// ==========================================================

// Prediction:
// It will print 10.
// The result will be a number.
// WHY: The * operator performs multiplication.
// JavaScript converts both strings into numbers.

console.log("5" * "2"); // 10


// ==========================================================
// 4. true + 1
// ==========================================================

// Prediction:
// It will print 2.
// The result will be a number.
// WHY: When true is used in a mathematical operation,
// JavaScript converts true to 1.
// So this becomes 1 + 1.

console.log(true + 1); // 2


// ==========================================================
// 5. true + "1"
// ==========================================================

// Prediction:
// It will print "true1".
// The result will be a string.
// WHY: Because one operand is a string, + performs string
// concatenation instead of numeric addition.
// true is converted to the string "true".

console.log(true + "1"); // "true1"


// ==========================================================
// 6. false + null
// ==========================================================

// Prediction:
// It will print 0.
// The result will be a number.
// WHY: This is numeric addition because neither value is a
// string. In a numeric context, false becomes 0 and null
// becomes 0.
// So this becomes 0 + 0.

console.log(false + null); // 0


// ==========================================================
// 7. null + undefined
// ==========================================================

// Prediction:
// It will print NaN.
// The result will be a number.
// WHY: null becomes 0 in numeric conversion, but undefined
// becomes NaN.
// 0 + NaN results in NaN.

console.log(null + undefined); // NaN


// ==========================================================
// 8. 1 / 0
// ==========================================================

// Prediction:
// It will print Infinity.
// The result will be a number.
// WHY: JavaScript uses IEEE 754 floating-point numbers.
// Dividing a positive number by zero produces positive Infinity.

console.log(1 / 0); // Infinity


// ==========================================================
// 9. 0 / 0
// ==========================================================

// Prediction:
// It will print NaN.
// The result will be a number.
// WHY: 0 divided by 0 does not have a meaningful numeric result,
// so JavaScript produces the special numeric value NaN.
// NaN means "Not a Number".

console.log(0 / 0); // NaN


// ==========================================================
// 10. "abc" - 1
// ==========================================================

// Prediction:
// It will print NaN.
// The result will be a number.
// WHY: The - operator forces JavaScript to convert "abc"
// into a number. "abc" cannot be converted into a valid number,
// so the conversion produces NaN.
// NaN - 1 is still NaN.

console.log("abc" - 1); // NaN


// ==========================================================
// 11. [] + []
// ==========================================================

// Prediction:
// It will print "" (an empty string).
// The result will be a string.
// WHY: With +, arrays are converted to primitive values.
// An empty array converts to an empty string.
// So this effectively becomes:
// "" + ""
// which produces "".

console.log([] + []); // ""


// ==========================================================
// 12. [1] + [2]
// ==========================================================

// Prediction:
// It will print "12".
// The result will be a string.
// WHY: The arrays are converted to primitive values.
// [1] becomes "1" and [2] becomes "2".
// The + operator then concatenates the strings.
//
// So:
// [1] + [2]
// becomes:
// "1" + "2"
// which produces "12".

console.log([1] + [2]); // "12"
