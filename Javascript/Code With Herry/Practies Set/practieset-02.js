// Problem-01

let age=18
if (age>=10 && age<=20)
{
    console.log("You Are Age Between 10 And 20")
}
else{
    console.log("You Are Not Age Between 10 And 20")
}


// Problem-02

switch(age){
    case "18":
        console.log("You Valid Driving")
    break;
    default:
        console.log("You Not Valid Driving")
}

// Problem-03

let num=10
if (num%2==0 && num%3==0)
{
    console.log("Number Divided 2 And 3")
}
else
{
    console.log("Number Not Divied 2 And 3")
}

// Problem-04

num=27
if (num%2==0)
{
    console.log("it is Divided 2 ")
}
else if (num%3==0)
{
    console.log("It is Divided 3")
}
else{
   console.log("It is Not Divided 2 or 3") 
}

// Problem-05

age=20
console.log("You Can",(age<18 ? "Not Drive" : "Drive"))

