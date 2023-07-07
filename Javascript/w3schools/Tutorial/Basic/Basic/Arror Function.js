// Arror Function //

const myfunction =(a,b)=>{
    return a+b;
};

console.log(myfunction(5,6));

// Before Arrow //

let hello=" ";

hello=function(){
    return "How Are You";
}
console.log(hello())

// With Function Arrow //

hello = () =>{
    return "keyur Pansuriya";
}

console.log(hello())

// With Arrow Function Peramater //

hello = (ke) =>{
    return "keyur" + " " + ke;
}

console.log(hello("pansuriya"));
