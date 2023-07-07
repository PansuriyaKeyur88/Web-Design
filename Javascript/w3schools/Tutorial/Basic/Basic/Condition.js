// Condition Statements

// 1.if Statement

let a=18;
if (a<=18)
{
    console.log("You Not Are DRIVE");
}

// 2. if..else Statement


let hour = new Date().getHours();
let greeting;


if (hour<12)
{
   console.log(greeting="Good Mornig");
}
else{
    console.log(greeting="Good Night");
}

// 3. if..elseif..else Statement

if (hour<10)
{
   console.log(greeting="Good Mornig");
}
else if (hour<15){
    console.log(greeting="Good Afternon");
}
else{
    console.log(greeting="Good Evning")
}

// 4.switch Statement

switch (new Date().getDay()){

    case 0:
        day="sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Thesday";
        break;
    case 3:
        day="Wen";
        break;
    case 4:
        day="Thu";
        break;
    case 5:
        day="Fri";
    case 6:
        day="sat";
}
