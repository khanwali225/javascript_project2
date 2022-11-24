// const array1 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(array1[0])
// console.log(array1.length)


// const daysOfWeek = [];
// console.log(daysOfWeek);


// //push() and splice() function
// daysOfWeek.push(1);   //push function add value/element at the last of array
// daysOfWeek.push("Tuesday");
// daysOfWeek.splice(1,0,"Monday");    //splice function remove value/element from array and if necessary, add new element in their place
// console.log(daysOfWeek);

// const daysOfWeek2 = [ 5, 6, 7, "Wednesday", "Thursday", 1000];   // added 1000
// console.log(daysOfWeek2);

// //console.log(daysOfWeek.concat (daysOfWeek2)); 
//  const allDays = daysOfWeek.concat(daysOfWeek2);  //the above array is also correct but you can also use this array if you want
//  console.log(allDays)

// // //Pop() function  delete last element
// allDays.pop()
// console.log(allDays);  // 1000 which is last element deleted

// // //shift() function delete first element
// allDays.shift()
// console.log(allDays); // remove first element which is sunday from array

// // //[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] this is the array left
// //slice() function 
// allDays.splice(2,3);  // 1st value show indexing, 2nd value show deletiong, and 3rd value show addition, if u want to add
// console.log(allDays) //[ 'Monday', 'Tuesday'] left in array

// //Finding value
// const classDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Saturday"];
// console.log(classDays)
// let findValue = classDays.find(e => e === "Thurday");  //finding non existed value in array
// let findValue2 = classDays.find(e => e === "Sunday");  //finding the existing value in array
// console.log(findValue);
// console.log(findValue2);


// let numArray = [11, 12, 60, 33, 42, 90, 15, 16];
// numArray.sort();        //ascending order
// console.log(numArray);
// numArray.reverse();    //decending order
// console.log(numArray);

// //Muti-dimensional array => when there is multiple arrays inside an array.
// const array = [1,2,3]
// const array3 = [array, array]
// console.log(array3);
// console.log(array3[0][1]);   // you can get value inside array


// // //Object  => is the collection of data but instead of simple list, it has properties.
// const student = {
//     rollNumber: "PIAIC123",
//     firstName: "Khan",
//     lastName: "Wali",
//     courses: ["Web3", "blockchain"],   //u can hv array inside obj
//     address: {                         //u can have obj inside obj
//         city: "Peshawar",
//         country: "Pakistan"
//     }
// }                                         //obj has curly bracket {}
// console.log(student.rollNumber)
// console.log(student.firstName)
// console.log(student.lastName)
// console.log(student.courses)
// console.log(student.address)

// student.rollNumber = "PIAIC123456"        //rollNumber updated
// console.log(student.rollNumber);



// if else statement
// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// let isInPakistan = true;
// if (isInPakistan) {
//     console.log("Hello Imran")
// } else {
//     console.log("Hello Alexander")
// }

// let percentage = prompt("whats your percentage?");

// if (percentage >= 90) {
//     console.log("A+")
// } else if(percentage >= 80) {
//     console.log("A")
// } else if(percentage >= 70) {
//     console.log("B")
// } else if(percentage >= 60) {
//     console.log("C")
// } else if(percentage >= 50) {
//     console.log("D")
// } else {
//     console.log("F")
// }
 


//Turnary Operator

// import promptSync from 'prompt-sync';
// const prompt = promptSync();

// let percentage = prompt("What's your percentage?");
// const result = percentage >= 50 ? "Passed" : "Failed";
// console.log(result);



// //Switch statements
import promptSync from 'prompt-sync';
 const prompt = promptSync();

let location = prompt("Where are you?");
switch(location) {
    case "America":
        console.log("Hello Alexander");
        break;
    case "Macadonia":
        console.log("Hail Alexander the Great");
        break;
    case "Pakistan":
        console.log("Salam Imran bhai");
        break;
    case "Germany":
        console.log("Guten Tag Alexander");
        break;
    default:
        console.log("Hi Alexander");
}