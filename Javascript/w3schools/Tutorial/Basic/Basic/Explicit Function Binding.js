// Explicit Function Binding Method


// 1.Call() Method

// const person1={
//     fullname:function(){
//         return this.firstName + " " + this.secondName
//     }
// }

// const person2={
//     firstName:"keyur",
//     secondName:"pansuriya"
// }

// let x=person1.fullname.call(person2);
// console.log(x);

// 2.Blind Methdo //

const person1={
    firstName:"Sujal",
    secondName:"Padsala",
    fullname:function(){
        return this.firstName + " " + this.secondName
    }
}

const person2={
    firstName:"keyur",
    secondName:"pansuriya",
}

let x=person1.fullname.bind(person2);
console.log(x());//() musty important//
