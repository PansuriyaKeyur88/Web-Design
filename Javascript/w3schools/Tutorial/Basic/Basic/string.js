// let a="keyur";
// document.getElementsByClassName("second")[0].innerHTML=a.slice(-2);

// String Method //

// 1.Legth
let word="keyur";
let word2="pansuriya";
console.log("Length ==>",word.length);

// onclick=function(){
//     let a=document.getElementsByClassName("method")[0].innerHTML;
//     document.getElementsByClassName("method")[0].innerHTML=a.length;
// }

// 2.Slice
console.log("Slice ==>"+word.slice(0,2));
console.log("Slice ==>"+word.slice(0,-2));

// 3.substring()

console.log("SubString ==>"+word.substring(4,2));

// onclick=function(){
//     let a=document.getElementsByClassName("method")[0].innerHTML;
//     document.getElementsByClassName("method")[0].innerHTML=a.substring(2,5);
// }

// 4.Substr()

console.log("Substr ==>"+word.substr(0,2));

// onclick=function(){
//     let a=document.getElementsByClassName("method")[0].innerHTML;
//     document.getElementsByClassName("method")[0].innerHTML=a.substr(0,5);
// }

// 5.Replace()

console.log("Replace ==>"+word.replace("keyur","Mayur"));

// onclick=function(){
//     let a=document.getElementsByClassName("method")[0].innerHTML;
//     document.getElementsByClassName("method")[0].innerHTML=a.replace("keyur","mayur");
// }

// 6.Touppercase

console.log("ToUppercase ==>"+word.toUpperCase())

// onclick=function(){
//     let a=document.getElementsByClassName("method")[0].innerHTML;
//     document.getElementsByClassName("method")[0].innerHTML=a.toUpperCase();
// }

// 7.Tolowercase()

console.log("Tolowercase ==>"+word.toLowerCase())

onclick=function(){
    let a=document.getElementsByClassName("method")[0].innerHTML;
    document.getElementsByClassName("method")[0].innerHTML=a.toLowerCase();
}

// 8.Concat()

console.log("Concate ==>"+word.concat(" ",word2))

// 9.trim()

let word3="      keyur Pansuriya"
console.log("Trim ==>"+word3.trim())

// 10.padstart()

let word4="5"
console.log("Pad Start ==>"+word4.padStart(5,"0"))

// 11.Padend()

console.log("Pad End ==>"+word4.padEnd(4,"0"))

// 12.tostring()

let word5=10
word5.toString()
console.log("Pad End ==>"+word4.padEnd(4,0))

// 13.charAt

console.log("CharAt ==>"+word.charAt(0))

// 14.charcodeAt

console.log("CharCodeAT ==>",word.charCodeAt(2))

// 15.Property Acess [] Similar To charAt

console.log(word[0])

// 16.split()

let word6="keyur,pansuriya"
console.log(word6.split(","))

// ================================================================================== //

// 1.indexOf()

let word7="This is 'JavaScript' Language"
console.log("indexof===>"+word7.indexOf("JavaScript"))

// 2.Lastindexof()

// 3.Serch()

// 4. MatchAll()

console.log("MatchAll ==>"+word7.matchAll("is"))

// 5. includes()

console.log("Include ==>"+word7.includes("is"))

// 6. StartWith()

console.log("Start With ==>"+word7.startsWith("This"))

// 7.Endwith()

console.log("End With ==>"+word7.endsWith("Language"))


// =============================================================================//
