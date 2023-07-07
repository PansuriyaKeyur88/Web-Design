let a=new Date("2023-6-14");
console.log(a.getFullYear())
console.log(a.getMonth()+1)
console.log(a.getDate())

// Return Month Name

const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
let month = new Date();
console.log(months[month.getMonth()])


// Retuen Day Name

const days =['sun','mon','tue','wed','thur','fri','set'];
let day = new Date();
console.log(days[day.getDay()]);
