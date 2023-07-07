// Game => Sanke , Water And Gun Game

// s / w ==> s
// s / g ==> g
// w / s ==> w


console.log("Game")
let words = ['snake', 'water', 'gun'];
let random = words[Math.floor(Math.random() * words.length)];
let input;
let user_points = 0;
let computer_points = 0;
let chances = 1;
let round = 1;
do {
    input = prompt("Enter The Sanke , Water ,Gun ==>");
    if (input == random) {
        console.log(`Round => ${round++}`)
        console.log("Draw");
        chances++
    }
    else if (input == 'snake' && random == 'gun') {
        console.log(`Round ==> ${round++}`)
        console.log("Computer wins!");
        chances++
        computer_points++
        console.log(`Computer points = ${computer_points}`);
    }
    else if (input == 'snake' && random == 'water') {
        console.log(`Round ==> ${round++}`)
        console.log("You wins!");
        chances++
        user_points++
        console.log(`Your points = ${user_points}`);
    }
    else if (input == 'water' && random == 'snake') {
        console.log(`Round ==> ${round++}`)
        console.log("Computer wins!");
        chances++
        computer_points++
        console.log(`Computer points = ${computer_points}`);
        round++
    }
    else if (input == 'water' && random == 'gun') {
        console.log(`Round ==> ${round++}`)
        console.log("You wins!");
        chances++
        user_points++
        console.log(`Your points = ${user_points}`);
        round++
    }
    else if (input == 'gun' && random == 'water') {
        console.log(`Round ==> ${round++}`)
        console.log("Computer wins!");
        chances++
        computer_points++
        console.log(`Computer points = ${computer_points}`);
        round++
    }
    else if (input == 'gun' && random == 'snake') {
        console.log(`Round ==> ${round++}`)
        console.log("You wins!");
        chances++
        user_points++
        console.log(`Your points = ${user_points}`);
        round++
    }
    else {
        console.log('this not a valid input');
    }
} while (chances <= 3 && round <= 3) {
    console.log("\n==>Result<==")
    console.log(`Your points = ${user_points}`);
    console.log(`Computer points = ${computer_points}`);
    if (user_points < computer_points) {
        console.log('Sorry, but the finall winner is computer.');
        console.log('Game ended');
    }
    else if (user_points > computer_points) {
        console.log('Congrats!, You are the Finall winner.');
        console.log('Game ended');
    }
    else {
        console.log("The game is end and It's a draw.");
    }
}