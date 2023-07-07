let a=new Date();
console.log(a);
let day = a.getDay();
console.log(day);
let month = a.getMonth()+1;
console.log(month);
let date = a.getDate();
console.log(date);
let year = a.getFullYear();
console.log(year);
let h = a.getHours();
console.log(h);
let m = a.getMinutes();
console.log(m);
let s=a.getSeconds();
console.log(s);
let ms=a.getMilliseconds();
console.log(ms);

console.log(a.getUTCDate());
console.log(a.getUTCDay());
console.log(a.getUTCMonth());

let b = Date.now();
console.log(b);

// Set Time //

let x= new Date()
x.setFullYear(2005,7,2)
console.log(x);
