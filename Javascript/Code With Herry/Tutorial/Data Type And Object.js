/* Primitivtes  Data type

1.Null
2.Number
3.String
4.Symbol
5.Boolean
6.Bigint
7.Underfined  */

let a=null
let b=123
let c="keyur"
let d=Symbol("My Name is Keyur Pansuriya")
let e=true
let f=BigInt("10")+BigInt("15")
let g=undefined
console.log(a,b,c,d,e,f)
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(b))

// Object

const name={
    keyur:88,
    sujal:85,
    shyam:90
}

console.log(name)
name['keyur']=58
console.log(name)
name['chintan']=98
console.log(name)
