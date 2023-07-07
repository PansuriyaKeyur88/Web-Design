// Exersice - 1 - Guess Number // 

let r=Math.random()*100
r=Number.parseInt(r)
console.log(r)
let inp;
let score=100
 
while (inp!=r)
{
    score=score-1
    inp=prompt("Enter The Number ==>")
    if(inp ==r)
    {
        console.log("Congratulation! You Guess the Correct Number.")
        console.log(`You Guess the Actual Number in ${100 - score} Chance`)
    }
    else{
        if(inp>r && inp<100)
        {
            console.log("You Number is Greater then the actual number")
        }
        else{
            if(inp<r && inp>0)
            {
                console.log("Your Number is smaller then the actual number")
            }
            else{
                console.log("Enter the number between 1 to 100")
            }
        }
    }
}
