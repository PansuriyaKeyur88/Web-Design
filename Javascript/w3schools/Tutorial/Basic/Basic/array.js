// let b = ["keyur","sujal","madhav","chintan","vraj"];
// console.log(b)
// console.log(b[0])
// console.log(b[4])

const array2 = [
    "keyur",
    "sujal",
    "madhav",
    "chintan",
    "vraj"
]

// ==> Adding values

array2[5]="shyam"
console.log(array2)

// ==> Updating Values

array2[0]="shyam"
console.log(array2)

// ==> New Array Means Round Branckets With in Arrat But You Define NewArray()

let a = new Array (1,2,3,4,5,"keyur")
console.log(a)

const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);
console.log(cars[0]);
console.log(cars[cars.length-1])
console.log(cars.length)
console.log(cars.sort())

let b=[1,2,34,4,5,6,7,89]

// function compare(a,b){
//     return a-b;
// }

// b.sort(function(a,b){
//     return a-b;
// })


console.log(b)

console.log(a.sort(random))

console.log(b.sort(compare));
// 1.For Loop()

for(let i=0;i<=b.length-1;i++)
{
    console.log(b[i])
}

// 2.For Each()

b.forEach((Element)=>{
    console.log(Element)
})

const match = {
    batter:"virat",
    run:45
};

console.log(match)
console.log(match["batter"])
console.log(match.batter)

// Array Property //

// 1.length
console.log(array2.length);

// 2.First Array Element
console.log(array2[0])

// 3.last Array Element
console.log(array2.length-1)

// Array In Looping //

// 1.For Loop

let b = ["keyur","sujal","shyam","purstom","khusbu"]

for (let i=0 ; i<=b.length-1; i++)
{
    console.log(b[i]);
    
}

// 2. For Each

b.forEach(element => {
    console.log(element)    
});

// 3.Array Form

let d="keyur";
let e = Array.from(d)
console.log(e)

// 4.For...of

for (let i of b)
{
    console.log(i)
}

// 5.For..in

for (let i in b){
    console.log(b[i])
}

// 6.Map() = A new Array String Creates

let k=[1,2,3,4,5,6,7,8,9]
let l=k.map((value)=>{
    console.log(value)
    return value+1
})


// ==>. Array Method

// 1.Array length

let a=[1,2,3,45,6,78,9]
console.log(a.length)


// 2.Array toString() ==> Array Convert to String

console.log(a.toString())

// Join() 

console.log(a.join("="))

// Array pop() ==> Value Random Removing in Array

console.log(a.pop())
console.log(a)

// Array push() ==> value Adding in Array

console.log(a.push(54))
console.log(a)

// Array shift() ==> First Element Removing Values

console.log(a.shift())
console.log(a)

// Array unshift() ==> First Element Adding Values 

console.log(a.unshift(85)) 
console.log(a)

// Array Concat() ==> Two Array Merge 

let b=["keyur","sujal","chintan"];
console.log(a.concat(b));

// Array Sort()

function compare (a,b){
    return b-a;
}
console.log(a.sort(compare))

// Array revese

console.log(a.reverse())

//Array Match Random()

let a=[55,1,2,3,45,6,78,9]
console.log(a)

// a.sort(function(){
//     return 0.5-Math.random();
// })

// Array Lower Method

a.sort(function(x,y){
    return x-y;
})

console.log(a[0])

// Array Highest Mehod

a.sort(function (x,y){
    return y-x;
})

console.log(a[0])

// Array Math.max() ==> Array in Highest Serch

function max(arr){
    return Math.max.apply(null,arr)
}

console.log(max(a))

// Array Math.min() ==> Array in Lowest Serch

function min(arr){
    return Math.min.apply(null,arr)
}

// ==> sorting Object Array

console.log(min(a))

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  
console.log(cars)
cars.sort(function(a, b){return a.year - b.year});
console.log(cars[0],cars[1],cars[2]);

// ==> Array Litterl 

let b=[25,41,36,89,74,78]
let tex=""
b.forEach(element => {
    console.log(element);
});

// 1.For Loop

let a=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<=a.length-1;i++)
{
    console.log(a[i])
}

// 2.ForEach

a.forEach(Element =>{
    console.log(Element)
});

// 3.Array From

a="keyur"
let array = Array.from(a)
console.log(array)

// 4.For in

a=[1,2,3,4,5,67,8]
for (let i in a)
{
    console.log(a[i])
}

// 5.For Of

for (let i of a)
{
    console.log(i)
}

// 6.map()

let arr = [45,25,3,6]
let map = arr.map((value)=>{
    console.log(value)
    return value+1
})

// 7.filter()

let a=[0,12,3,56]
let b=a.filter((a)=>{
    return a<5
})
console.log(b)

// 8.Reduce()

let x=[1,2,3,4]
let y = x.reduce((h1,h2)=>{
    return h1+h2
})

console.log(y)
