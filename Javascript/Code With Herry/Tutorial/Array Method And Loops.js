// ==> Array = Array is Collection of Some item //


// let b=["keyur","sujal","chintan","ram"]
// console.log(b)
// let a=[1,2,3,4,5,6]
// console.log(a)
// a[2]=5
// console.log(a)
// a[6]=20
// console.log(a)
// console.log(typeof(a))

// ==> Array Method //

/*
1.String
2.Join
3.Pop()
4.Push()
5.Shift()
6.unshift()
7.delete()
8.concat()
9.sort()
10.reverse()
11.Splice()
12.Slice()
*/

let a=[1,2,3,4,5,6,7,8,9]
let b=[10,11,12,13,14,15]

console.log("To String()=>",a.toString())

console.log("join()=>",a.join("-"))

let n=a.pop()
console.log("Pop()=>",a)

l=a.push(20)
console.log("Push()=>",a)

let n2=b.shift()
console.log("Shift =>",b)

let n3=b.unshift(20)
console.log("UnShift =>",b)

console.log(a)

let num=[1,2,5,3,4]
delete num[0]
console.log("Delete =>",num)

console.log("Concat()=>",a.concat(b))

const fun=(x,y)=>{
    return x-y
}
console.log("sort()=>",a.sort(fun))

console.log("Reverse()=>",a.reverse())

a.splice(2,1,1024)
console.log("Splice()=>",a)

let k=a.slice(2)
console.log("Slice()=>",k)

// ==> Looping Throught Array //

/*
1.Array For loop
2.For Each loop
3.Array Form
4.for..of
5.for..in
6.map
7.filter
8.reduce
*/

// 1. Array For Loop

// let a=[1,2,3,4,5,6]
// for (let i=1 ; i<=a.length ;i++)
// {
//     console.log(i)
// }
// console.log("\n")

// 2.For Each Loop

// a.forEach((Element)=>{
//     console.log(Element)
// })

// 3.Array Form

// let b="keyur"
// let c=Array.from(b);
// console.log(c)

// 4.for..of

// for (const iterator of a) {
//     console.log(iterator)
// }

// 5.For..in

// for (const key in a) {
//     console.log(a[key])
// }

// 6.map()

// let arr=[1,2,3,4,5,6]
// let a=arr.map((values)=>
// {
//     console.log(values)
//     return values+1
// })
// console.log(a)

// 7.Filter

// let a=[1,2,3,4,5]
// let b=a.filter((a)=>
// {
//     return a<5
// })
// console.log(b)

//8.Reduce

// let a=[1,2,3,4,5]
// let b = a.reduce((x1,x2)=>
// {
//     return x1+x2
// })
// console.log(b)