let a = "hello"

function sum(name) {
    return "keyur" + " " + (name);
}

class car {
    constructor() {
        console.log("Class");
    }
}

// Defalut Message //

let message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';

}

export default message;

export { a, sum, car };
