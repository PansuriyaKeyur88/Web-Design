// ================================================================================================

// Operator type 4 //

/*
1.Arithmathic
2.Asssignment
3.logical
4.Comparision
5.Turnary
*/

// 1. Arithmathic Operator //

let a=12
let b=8
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log(a++)
console.log(++a)
console.log(--b)
console.log(b--)

// 2. Assignment Operator //

let g=12
g+=8
console.log(x)
g-=12
console.log(x)
g*=12
console.log(x)
g/=2
console.log(x)
g%=5
console.log(x)
g**=3
console.log(x)

//3.Comparision Opetrator //

let p=12
let q=10
console.log(p>q)
console.log(p<q)
console.log(p==q)
console.log(p!=q)
console.log(p===q)
console.log(p!==q)

//4.Logical Operator//

let k=12
let j=45
console.log(k>j && k<j)
console.log(k>j || k<j)
console.log(!k==j)

// 5.Turnary Operator //
 
let c=19
console.log("You are", (c<=18 ? "Not Done" : "Done"))

// ================================================================================================

// Condition Statement 5 //

/*
1.if statement
2.if..else statement
3.ladder statement
4.nested statement
5.switch statement
*/

// 1.if statement

let num=1
if (num>=0)
{
    console.log(num,"= Positive Number")
}

//2.if..else statement

let n = prompt ("Enter Number")
if (n>=0)
{
    console.log(n,"=Positive Number")
}
else{
    console.log(n,"=Nagative Number")
}

//3.Ladder Staement

let s=prompt("Enter the Number")
if (s>0)
{
    console.log("Positive Number")
}
else if(s==0)
{
   console.log("Zero Number")
}
else{
    console.log("Nagative Number")
}

//4.Nested if Statment

let x=prompt("Enter First the Number")
let y=prompt("Enter Second the Number")
let z=prompt("Enter Third the Number")
if (x>y && x>z)
{
    console.log("First is Biggest Number")
}
else
{
    if(y>x && y>z)
    {
        console.log("Second is Biggest Number");
    }
    else
    {
        if(z>x && z>y)
        {
            console.log("Third is Biggest Number");
        }
        else
        {
            if(x==y==z)
            {
                console.log("First,Second And Third Are Same")
            }
            else
            {
                if(x==y && z==y)
                {
                    console.log("First And Second Are Same")
                }
                else
                {
                    if(x==z && z==x)
                    {
                        console.log("First And Third Are Same")
                    }
                    else{
                        console.log("Second And Third Are same")
                    }
                }
            }
        }
    }
}

// 5.Switch Statment

let day=1;
switch (day){
    case 1:
        console.log("Sunday")
    break;
    case 2:
        console.log("Monday")
    break;
    case 3:
        console.log("Friday")
    break
    default:
        console.log("Saturdat")
}