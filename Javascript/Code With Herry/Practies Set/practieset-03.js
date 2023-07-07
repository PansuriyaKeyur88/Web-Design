// Problem-01

// let marks={
//     keyur:90,
//     sujal:95
// }

// for (let i=1;i<=Object.keys(marks);i++)
// {
//     console.log(Object.keys(marks)[i],marks[Object.keys(marks)[i]])
// }

// Problem-02

let marks={
    keyur:90,
    sujal:95
}

for (const key in marks) {
    console.log(key,marks[key])
}

// Problem-03

let correct=88
let i;
do
{
    console.log("Try Again")
    i=prompt("Enter The Number = ")
}while(correct!=i)
console.log("Correct Number")

// Problem-04

const sum=(x,y,z,p,q)=>{
    return x+y+z+p+q;
}

let a=prompt("A=")
let b=prompt("B=")
let c=prompt("C=")
let d=prompt("D=")
let e=prompt("E=")

console.log("Sum is ==> ",sum(x+y+z+p+q))