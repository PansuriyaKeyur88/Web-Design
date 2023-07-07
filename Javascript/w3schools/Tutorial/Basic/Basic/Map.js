// ==> JavaScript Maps :-
                    // A Map holds key-value pairs where the keys can be any datatype.
                    // A Map remembers the original insertion order of the keys.


// 1.New Map()

const a= new Map([
    ["keyur",45],
    ["sujal",55],
    ["chintna",85]
])

console.log(a);
console.log(a.get("keyur")); // get method use key value

console.log(a.delete("sujal")); // Delete Mehod use Remove element in map
console.log(a);

console.log(a.has("keyur")); // has Method use check in map true or false

console.log(a.entries());
