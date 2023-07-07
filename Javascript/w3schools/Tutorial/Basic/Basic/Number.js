// Number Method

// toString()	==> Returns a number as a string
// toExponential()	==> Returns a number written in exponential notation
// toFixed()	==> Returns a number written with a number of decimals
// toPrecision()	 ==> Returns a number written with a specified length
// ValueOf()	==> Returns a number as a number


// 1. Number Convert To String

let x=12;
console.log(typeof(x));
let y=x.toString()
console.log(y);
console.log(typeof(y));

// 2.Exponential() method

let a=1.255;
console.log(typeof(x));
let b=a.toExponential(2)
console.log(b,typeof(b));

// 3.toFixed() Method = toFixed(2) perfect working money.

let p=9.8635;
console.log(typeof(p));
let q=p.toFixed(3);
console.log(q,typeof(q));

// 4.toPrecision() Method = returns a string, with a number written with a specified length:

let j=2.554657;
let k =j.toPrecision(1);
console.log(k,typeof(k));

// 5.Valueof()  Method = In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
// There is no reason to use it in your code.

let m = 123;
m.valueOf();
(123).valueOf();
(100 + 23).valueOf();
console.log(m);


// Number Method//

let n="656.554";
console.log(typeof(n));
n=parseInt(n);
console.log(typeof(n));
n=parseFloat(n);
console.log(typeof(n));

// Number Propeties //

let num;
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// console.log(num.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
