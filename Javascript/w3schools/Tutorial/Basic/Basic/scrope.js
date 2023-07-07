// 3 Type Scope

// 1.Block Scope
// 2.Function Scope
// 3.Global Scope

// 1.Block Scope 

{
    let a=10;
    console.log(a);
}

// 2.Function Scope

function keyur(){
    return "hello";
}
console.log(keyur());

// Local Scope

function fun(){
    let a ="hello";
    console.log("hello")
}

// Golbal Scope

let b=23;
keyur();

function keyur()
{
    console.log(b);
}
