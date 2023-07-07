// The JavaScript this Keyword

const person={
    first_name:"Keyur",
    second_name:"Pansuriya",
    age:18,
    fullname:function(){
        return this.first_name + " " +this.second_name;
    }
};

console.log(person.fullname());

// Function //

function myfunction(){
    return this;
}

console.log(myfunction());

// let 

let x=this;
console.log(x);

// var

let y=this;
console.log(y);
