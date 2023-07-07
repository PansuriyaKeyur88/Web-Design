// ==> JavaScript Iterables

// Iterables are iterable objects (like Arrays).
// Iterables can be accessed with simple and efficient code.
// Iterables can be iterated over with for..of loops

let a="keyur";
for (let i of a){
    console.log(i);
}

// Iterables Over Set

let b = new Set(["k","e","y","u","r"]);
for (let i of b){
    console.log(i);
}

// Iterable Over Const

const cars=["BMW","ODI","ROLS ROYAL"]
for (let i of cars){
    console.log(i);
}
