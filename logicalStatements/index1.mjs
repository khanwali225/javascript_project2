
//If else Statement

// let isInPakistan = true;
// if (isInPakistan) {
//     console.log("Hello Imran")
// } 
// else {
//     console.log("Hello Alexander")S
// }

// let percentage = prompt("What's your percentage?");
// if (percentage >= 90) {
//     console.log("A+")
// }
// else if (percentage >= 80) {
//     console.log("A")
// }
// else if (percentage >= 70) {
//     console.log("B")
// }
// else if (percentage >= 60) {
//     console.log("C")
// }
// else if (percentage >= 50) {
//     console.log("D")
// }
// else {
//     console.log("F")
// }

// We can also take input from user here and install promt library.
import promptSync from 'prompt-sync';
const prompt = promptSync();

let percentage = prompt("What's your percentage?");
if (percentage >= 90) {
    console.log("A+")
}
else if (percentage >= 80) {
    console.log("A")
}
else if (percentage >= 70) {
    console.log("B")
}
else if (percentage >= 60) {
    console.log("C")
}
else if (percentage >= 50) {
    console.log("D")
}
else {
    console.log("F")
}


//Turnary Operator
// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// let percentage = prompt("What's your percentage?");
// const result = percentage >= 50 ? "Passed" : "Failed";
// console.log(result);

//Switch statements
// import promptSync from 'prompt-sync';
//  const prompt = promptSync();

// let location = prompt("Where are you?");
// switch(location) {
//     case "America":
//         console.log("Hello Alexander");
//         break;
//     case "Macadonia":
//         console.log("Hail Alexander the Great");
//         break;
//     case "Pakistan":
//         console.log("Salam Imran bhai");
//         break;
//     case "Germany":
//         console.log("Guten Tag Alexander");
//         break;
//     default:
//         console.log("Hi Alexander");
// }