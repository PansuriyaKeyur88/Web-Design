// ==> Single Quto

// let x='keyur'
// console.log(x)

// ==> Double Quto

let k="keyur"
console.log(k)

// ==> Template litera;

let p="keyur"
let q="Pansuriya"
let sentence = `${x} ${y}`
console.log(sentence)
console.log("Keyur\nPansuriya")
console.log("Keyur\tPansuriya")
console.log("Keyur\rPansuriya")
console.log('Keyur\'Pansuriya')
console.log("keyur\"Pansuriya")

// ==> string Method

/*
1.length()
2.uppercase()
3.lowercase()
4.slice()
5.concat()
6.trim()
7.include()
*/

let x="keyur"
let y="pansuriya"
let z="     keyur    "
console.log("length()=>",x.length)
console.log("uppercase()=>",x.toUpperCase())
console.log("lowercase()=>",x.toLowerCase())
console.log("slice()=>",x.slice(1,3))
console.log("concat()=>",x.concat(y))
console.log("trim()=>",z.trim())
console.log("includes()=>",x.includes(z.trim()))
