// Problem-01

// let n=prompt("Enter The Number =");
// let a=[]
// for (let i=1;i<=n;i++)
// {
//     b=prompt("Enter The Element = ")
//     a.push(b)
// }
// console.log(a)

// Problrm-02

// let a=[]
// do
// {
//     b=prompt("Enter The Element = ")
//     a.push(b)
// }while(b!=0)
// console.log(a) 

//Problem-03

// let a=[10,2,30,4,50,60]
// let b=a.filter((a)=>{
//     return a%10==0
// })
// console.log(b)

// Problem-04

// let a=[1,2,3,4,5]
// let b = a.map((a)=>
// {
//       return a*a
// })
// console.log(b)

//Proble-05

let a=[1,2,3,4,5]
let b = a.reduce((x1,x2)=>
{
    return x1+x2
})
console.log(b)