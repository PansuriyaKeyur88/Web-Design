// ==> loops Types 5 //

/*
1.For Loop
2.For in Loop
3.For Of Loop
4.While Loop
5.Do..While Loop
*/

// 1.For Loop

let num=10
for (let i=1;i<=num;i++)
{
    console.log(i)
}

// 2.For in Loop 

const name={
    keyur:90,
    sujal:85,
    chintan:88
}

for (const key in name) {
    console.log(key,name[key])
}

// 3.For of loop

let k="keyur"
for (const iterator of k) {
    console.log(iterator)
}

// 4.While loop

let n=10
let i=1
while (i<=n)
{
    console.log(i)
    i++
}

// 5.Do..while loop

let number=10
let s=1
do
{
    console.log(s)
    s++  
}while (s<=10)

// ==> Function in javascript

// Simple Function in javascript 

function sum(x,y)
{
    return x+y;
}

let a=10
let b=20
let c=20

console.log("A And B Are Sum  = ",sum(a,b))
console.log("B And C Are Sum  = ",sum(b,c))
console.log("A And C Are Sum  = ",sum(a,c))

// latest Function in Javascript (Arrow Function )

const add=(p,q)=>{
    return p+q
}

let x=10
let y=20
let z=20

console.log("A And B Are Sum  = ",add(10,20))
console.log("B And C Are Sum  = ",add(b,c))
console.log("A And C Are Sum  = ",add(a,c))
