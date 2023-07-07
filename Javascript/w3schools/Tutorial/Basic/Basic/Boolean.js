//Boolean Values

// ==> Very often, in programming, you will need a data type that can only have one of two values, like

// YES / NO
// ON / OFF
// TRUE / FALSE == use

console.log(Boolean(10<25))

// 1.Everything Without a "Value" is False

let a=0;
console.log(Boolean(a))

// 2.Empty value

let b="";
console.log(Boolean(b))

// 3.Negative Zero  value

let c=-0
console.log(Boolean(c))

// 4.underdifine 

let d;
console.log(Boolean(d))

// 5.Null

let e=null;
console.log(Boolean(e))
