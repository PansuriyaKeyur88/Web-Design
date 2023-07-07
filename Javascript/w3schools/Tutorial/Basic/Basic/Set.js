// Set = A javaScript Set is COllectiion of Unique value

// Set Method //

// 1.New Set()

let a=new Set([1,2,3,4,5]);
console.log(a);

// 2.Add Set()

console.log(a.add(45)); // Add 45 In Set  
console.log(a.size);

        //==>  For Each

        // Create a Set
        const letters = new Set(["a","b","c"]);

        // List all Elements
        let text = "";
        letters.forEach (function(value) {
        text += value;
        })
        console.log(text);

// 3.Values Method()

console.log(a.values()); // ==> Convert object
