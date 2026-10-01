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

// ==========================================================
// CHALLENGE 5: CODE REVIEW
// ==========================================================


// ----------------------------------------------------------
// BUGGY CODE
// ----------------------------------------------------------

// Runtime: Creates a global-scoped variable called userName
// and stores the string "Sarah".
//
// ISSUE 1:
// `var` is outdated and has function scope, which can cause
// accidental variable overwriting and scope-related bugs.
// Prefer `const` when the value does not change.
var userName = "Sarah"

// Runtime: Creates userAge and stores "25" as a STRING.
//
// ISSUE 2:
// userAge should represent a number, but it is stored as a
// string. This can cause unexpected behaviour with + and
// other operations.
var userAge = "25"

// Runtime: Creates userScore and stores the number 85.5.
var userScore = 85.5

// Runtime: Creates scoreAdjustment and stores "10" as a STRING.
//
// ISSUE 3:
// scoreAdjustment is supposed to be a numeric adjustment,
// but it is stored as a string.
var scoreAdjustment = "10"

// Runtime: The + operator sees a number and a string.
// JavaScript converts the number to a string and concatenates
// them, producing "85.510" instead of 95.5.
//
// ISSUE 4:
// This is a type-coercion bug. The developer probably intended
// numeric addition, but accidentally performed string
// concatenation.
var newScore = userScore + scoreAdjustment

// Runtime: Concatenates "New score: " with newScore and prints
// the result to the console.
//
// Because of the previous bug, this prints:
// New score: 85.510
console.log("New score: " + newScore)

// Runtime: Creates salary and stores "50000" as a STRING.
//
// ISSUE 5:
// Salary should be represented as a number if mathematical
// calculations will be performed on it.
var salary = "50000"

// Runtime: Creates TAX_RATE and stores the number 0.15.
//
// ISSUE 6:
// `var` is used for a value that should never be reassigned.
// `const` would communicate that TAX_RATE is intended to stay
// constant.
var TAX_RATE = 0.15

// Runtime: The * operator converts the string "50000" to the
// number 50000 and multiplies it by 0.15.
// Result: 7500.
//
// ISSUE 7:
// Although this happens to work, relying on JavaScript's
// automatic type coercion hides the fact that salary is a
// string. Explicitly storing salary as a number is clearer
// and safer.
var tax = salary * TAX_RATE

// Runtime: Converts tax into a string as part of the +
// expression and prints "Tax: R7500".
console.log("Tax: R" + tax)

// Runtime: Subtracts the string "25" from 65.
// The - operator converts "25" into the number 25.
// Result: 40.
//
// ISSUE 8:
// This works because JavaScript performs automatic conversion,
// but userAge should already be a number. Relying on implicit
// conversion makes the code harder to reason about.
var yearsUntilRetirement = 65 - userAge

// Runtime: Converts yearsUntilRetirement into a string and
// prints "Years until retirement: 40".
console.log("Years until retirement: " + yearsUntilRetirement)

// Runtime: The + operator receives the string "25" and the
// number 85.5. Because one value is a string, JavaScript
// performs string concatenation.
//
// Result: "2585.5"
//
// ISSUE 9:
// This is another type-coercion bug. The likely intention was
// to add the age and score numerically, but the result is a
// string instead.
var totalAgeAndScore = userAge + userScore

// Runtime: Prints "2585.5".
console.log(totalAgeAndScore)

// Runtime: Creates isAdmin and stores the STRING "false".
//
// ISSUE 10:
// This is a serious boolean bug. The string "false" is truthy
// in JavaScript. It is NOT the same as the boolean false.
var isAdmin = "false"

// Runtime: Boolean("false") returns true because every non-empty
// string is truthy.
//
// So this prints:
// Admin: true
//
// This is probably the opposite of what the developer intended.
console.log("Admin: " + Boolean(isAdmin))


// ==========================================================
// FULLY CORRECTED VERSION
// ==========================================================

// Use const for values that should not be reassigned.
const userName = "Sarah";

// Store age as a number because we will perform calculations.
const userAge = 25;

// Store the score as a number.
const userScore = 85.5;

// Store the adjustment as a number.
const scoreAdjustment = 10;

// Both values are numbers, so + performs numeric addition.
const newScore = userScore + scoreAdjustment;

console.log("New score: " + newScore);

// Store salary as a number because it will be used in
// mathematical calculations.
const salary = 50000;

// Tax rate should not change during the program.
const TAX_RATE = 0.15;

// Both salary and TAX_RATE are numbers.
const tax = salary * TAX_RATE;

console.log("Tax: R" + tax);

// Store retirement age as a number.
const retirementAge = 65;

// Both values are numbers, so subtraction works without
// relying on automatic string conversion.
const yearsUntilRetirement = retirementAge - userAge;

console.log("Years until retirement: " + yearsUntilRetirement);

// Both values are numbers, so this performs numeric addition.
const totalAgeAndScore = userAge + userScore;

console.log(totalAgeAndScore);

// Store a real boolean instead of the string "false".
const isAdmin = false;

console.log("Admin: " + isAdmin);


// ==========================================================
// CODE REVIEW SUMMARY
// ==========================================================

// 1. Replaced var with const because these values are not reassigned.
//
// 2. Changed userAge from "25" to 25 so it is a number.
//
// 3. Changed scoreAdjustment from "10" to 10.
//
// 4. Fixed newScore so 85.5 + 10 produces 95.5 instead of
//    the string "85.510".
//
// 5. Changed salary from "50000" to 50000.
//
// 6. Changed TAX_RATE from var to const.
//
// 7. Removed unnecessary reliance on automatic type coercion.
//
// 8. Changed retirement calculations to use numeric values.
//
// 9. Fixed totalAgeAndScore so it performs numeric addition.
//
// 10. Changed isAdmin from the string "false" to the boolean
//     false. This prevents Boolean("false") from incorrectly
//     becoming true.

// ==========================================================
// Challenge 6: Why does 0.1 + 0.2 not equal 0.3?
// ==========================================================


// ==========================================================
// 1. 0.1 + 0.2
// ==========================================================

console.log(0.1 + 0.2);

// Expected output:
// 0.30000000000000004


// ==========================================================
// 2. 0.3 - 0.1
// ==========================================================

console.log(0.3 - 0.1);

// Expected output:
// 0.19999999999999998


// ==========================================================
// 3. 0.1 * 3
// ==========================================================

console.log(0.1 * 3);

// Expected output:
// 0.30000000000000004


// ==========================================================
// 4. 0.1 + 0.2 === 0.3
// ==========================================================

console.log(0.1 + 0.2 === 0.3);

// Expected output:
// false


// ==========================================================
// WHY DOES THIS HAPPEN?
// ==========================================================

/*
JavaScript uses the IEEE 754 double-precision floating-point
format to store numbers.

Computers store numbers internally using binary (0s and 1s),
not decimal digits.

Some decimal numbers, such as 0.1 and 0.2, cannot be represented
exactly as a finite binary number.

JavaScript therefore stores the closest possible binary
representation of those numbers.

When JavaScript calculates:

0.1 + 0.2

the small representation errors are combined, producing:

0.30000000000000004

This is not really a JavaScript-only problem. Almost every
programming language that uses IEEE 754 floating-point numbers
can have the same issue.

The problem is not that JavaScript cannot do basic addition.
The problem is that some decimal fractions cannot be represented
exactly in binary floating-point.
*/


// ==========================================================
// SAFE COMPARISON USING Number.EPSILON
// ==========================================================

const result = 0.1 + 0.2;

const isCloseEnough =
    Math.abs(result - 0.3) < Number.EPSILON;

console.log(isCloseEnough);

// Output:
// true


// ==========================================================
// WHAT IS Number.EPSILON?
// ==========================================================

/*
Number.EPSILON is the smallest difference between 1 and the
next larger number that JavaScript can represent as a Number.

It is approximately:

2.220446049250313e-16

We use it here as a small tolerance instead of expecting two
floating-point calculations to be exactly equal.

Instead of asking:

result === 0.3

we ask whether the difference between result and 0.3 is small
enough to be considered equal for our purpose.

Math.abs(result - 0.3) gives us the size of the difference.

If that difference is smaller than Number.EPSILON, we treat the
values as close enough.
*/


// ==========================================================
// WHY MONEY IS OFTEN STORED AS CENTS
// ==========================================================

/*
Financial applications often avoid storing money directly as
floating-point decimal values.

For example, instead of:

R10.50

an application might store:

1050 cents

as the integer 1050.

Integers can represent these whole-cent values exactly, which
avoids many floating-point precision problems.

The same idea can be applied to South African Rands:

R25.75 -> 2575 cents

This is why you may see financial systems work with integer
cents rather than floating-point Rands.
*/


```javascript
// ==========================================================
// ORIGINAL CODE — WITH CODE REVIEW COMMENTS
// ==========================================================

// Problem 1: `var` has function scope and can lead to accidental
// reassignment or scope-related bugs. `const` is clearer when
// the variable should not be reassigned.
var p = "199.99"

// Problem 2: `p` is not descriptive. A developer reading this
// has to guess what "p" represents.
//
// Problem 3: The price is stored as a string even though it will
// be used as a number. The multiplication operator will
// automatically convert it, but relying on implicit conversion
// makes the code less clear.
var q = "3"

// Problem 4: `q` is also not descriptive. Something like
// quantity clearly explains what the value represents.
//
// Problem 5: Quantity is stored as a string. It should be
// explicitly converted to a number before calculations.
var t = 0.15

// Problem 6: `t` is not descriptive. A name such as taxRate
// explains what 0.15 represents.
//
// Problem 7: `var` is being used even though the value should
// not be reassigned. `const` communicates that clearly.
var sub = p * q

// Problem 8: `sub` is vague. A name such as subtotal makes the
// meaning of the calculated value immediately clear.
//
// Problem 9: The calculation relies on JavaScript automatically
// converting p and q from strings into numbers. Explicit
// conversion makes the programmer's intention clear.
```

### Rewritten production version

```javascript
// ==========================================================
// REWRITTEN VERSION — PRODUCTION STYLE
// ==========================================================

// WHY: `const` is used because the price should not be reassigned.
// A descriptive name makes the purpose of the value immediately clear.
const price = "199.99";

// WHY: Explicit conversion makes sure we are working with a number
// before performing calculations instead of relying on JavaScript's
// automatic type coercion.
const numericPrice = Number(price);

// WHY: `quantity` is more meaningful than a name like `q`.
// Number() explicitly converts the input into a number so that
// multiplication behaves predictably.
const quantity = Number("3");

// WHY: A descriptive name makes it clear that 0.15 represents
// a tax rate. `const` is appropriate because the rate is not
// being reassigned.
const taxRate = 0.15;

// WHY: Using clearly typed numeric variables makes the calculation
// easy to understand and avoids relying on implicit conversion.
const subtotal = numericPrice * quantity;

// WHY: Template literals make it easy to build readable output
// and allow variables to be inserted directly into the string.
console.log(`Subtotal: R${subtotal}`);
```

### One improvement I'd make in a real application

If `price` and `quantity` are coming from a **user input, API, or form**, I'd also validate them instead of assuming `Number()` succeeded:

```javascript
const price = Number("199.99");
const quantity = Number("3");

if (!Number.isFinite(price) || !Number.isFinite(quantity)) {
    console.log("Invalid price or quantity.");
} else {
    const subtotal = price * quantity;

    console.log(`Subtotal: R${subtotal}`);
}
```

That is closer to **production thinking**: don't just convert the data—**check that the conversion produced a usable value**.

For this particular exercise, though, the main things the interviewer wants to see are:

**`var` → `const`/`let` + meaningful names + explicit conversion + template literals + explaining WHY.**


```javascript
/*
Challenge 8: Whiteboard Challenge — Receipt Generator

Variables and data types:
- productName: string
- unitPrice: number
- quantityInput: string
- taxRate: number
- quantity: number
- subtotal: number
- tax: number
- total: number
*/


// Four required variables at the top of the script.
const productName = "Wireless Mouse";
const unitPrice = 199.99;
const quantityInput = "3";
const taxRate = 0.15;


// Convert the quantity from a string to a number.
const quantity = Number(quantityInput);


// Calculate the subtotal using only numeric values.
const subtotal = unitPrice * quantity;


// Calculate the tax using only numeric values.
const tax = subtotal * taxRate;


// Calculate the final total.
const total = subtotal + tax;


// Build the receipt using a template literal.
// toFixed(2) ensures every monetary value has exactly two
// decimal places.
const receipt = `
========== RECEIPT ==========

Product:  ${productName}
Price:    R${unitPrice.toFixed(2)}
Quantity: ${quantity}
Subtotal: R${subtotal.toFixed(2)}
VAT:      R${tax.toFixed(2)}
Total:    R${total.toFixed(2)}

=============================
`;

console.log(receipt);


// ==========================================================
// EDGE CASE: INVALID QUANTITY
// ==========================================================

// This simulates a user entering letters instead of a number.
const invalidQuantityInput = "abc";

// Number("abc") cannot produce a valid number,
// so JavaScript returns NaN.
const invalidQuantity = Number(invalidQuantityInput);

console.log("Invalid quantity:", invalidQuantity);

// In a real application, we should not continue calculating
// with NaN. We should validate the user's input and show an
// error message asking them to enter a valid quantity.
//
// For example:
//
// if (!Number.isFinite(invalidQuantity)) {
//     console.log("Please enter a valid quantity.");
// }
```

### What the interviewer is checking

The important flow is:

```text
"3"  →  Number("3")  →  3
              ↓
         quantity = 3
              ↓
     unitPrice × quantity
              ↓
          subtotal
              ↓
       subtotal × taxRate
              ↓
             tax
              ↓
       subtotal + tax
              ↓
            total
```

For the example above:

- Unit price = **R199.99**
- Quantity = **3**
- Subtotal = **R599.97**
- VAT = **R89.9955**
- Total = **R689.9655**

Because the output uses `toFixed(2)`, the receipt displays:

```text
Subtotal: R599.97
VAT:      R90.00
Total:    R689.97
```

One thing to notice: `toFixed(2)` **only formats the displayed value**; it doesn't change the underlying floating-point calculation. That's okay for this interview exercise, but real financial systems often use integer cents or decimal arithmetic to avoid floating-point precision issues.