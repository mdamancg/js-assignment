//                       1
//A function is a reusable block of code designed to perform a specific task.
// Instead of writing the same logic repeatedly, you write it once inside a function and call it whenever required.

// Functions help in:

// Reusability
// Cleaner code
// Reduced repetition
// Better structure
// Easier debugging

//          2. Function Declaration

// function greet(name){
//     return "hello"+" "+ name+" "+ "Welcome to the coding gita";
// }
// console.log(greet("Aman"))
// console.log(greet("Ritesh"))

//                    3. Hoisting

//hosting: Hoisting is a JavaScript behavior in which function declarations can be called before they appear in the code.

// greet();  // Function called before definition
// function greet() {
//     console.log("Hello Aman!");
// }

//           4. Function Expression

// function avg(a,b,c){
//     result (a+b+c)/3;
// }
// console.log(age(10,10,10))

//.                  5-Parameters vs Arguments

// function multiply(x, y) {   #x,y is parameter
//     return x * y;
// }
// console.log(multiply(12, 5));  #12,5 is arguments

//                6. Return Statement

// function isEven(num){
//     return num%2==0;
// }
// console.log(isEven(24))

//              7. Multiple Parameters

// function findPercentage(obtainedMarks, totalMarks) {
//     return (obtainedMarks / totalMarks) * 100;
// }

// let result = findPercentage(456, 500);
// console.log("Percentage:", result + "%");

//            8. Function Without Return


// function greet() {
//     console.log("Hello Aman!");
// }

// let result = greet();

// console.log(result);

//         9. Practical Application

// const calculateSimpleInterest = function(principal, rate, time) {
//     let SI = (principal * rate * time) / 100;
//     return SI;
// };

// let result = calculateSimpleInterest(10000, 5, 2);
// console.log("Simple Interest:", result);

//               10. Mixed Concept Question

//a) Difference between Function Declaration and Function Expression
// - Function Declaration: Function ko directly function keyword se define karte hain. Isse definition se pehle bhi call kar sakte hain because of hoisting.
// - Function Expression: Function ko kisi variable mein store karte hain. Assignment se pehle call nahi kar sakte.

// function studentResult(name, marks) {
//     return "Student " + name + " has scored " + marks + " marks.";
// }

// console.log(studentResult("Aman", 90));
// console.log(studentResult("Rahul", 85));

