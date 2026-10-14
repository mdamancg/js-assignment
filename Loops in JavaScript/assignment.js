// Part I] - For Loop
// let count=0;
// let arr=[28,32,25,40,18,35];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=35){
//         console.log(arr[i]);
//         count++;
//     }else{
//         console.log("Not hot")
//     }
// }
// console.log("Count of hot days:", count);

//2
// let number = 4729;
// let total = 0;

// for (let i = 0; number > 0; i++) {
//     total += number % 10;
//     number = Math.floor(number / 10);
// }

// console.log("Sum of digits:", total);

//3

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//         console.log(i);
//     }
// }
// console.log("Loop complete");

//4

// let str = "JavaScript";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (
//         str[i] !== "a" &&
//         str[i] !== "e" &&
//         str[i] !== "i" &&
//         str[i] !== "o" &&
//         str[i] !== "u" &&
//         str[i] !== "A" &&
//         str[i] !== "E" &&
//         str[i] !== "I" &&
//         str[i] !== "O" &&
//         str[i] !== "U"
//     ) {
//         result += str[i];
//     }
// }

// console.log(result);

//5

// let matrix=[10,20,30,40]
// for(i=0;i<=matrix.length-1;i++){
//     if(matrix[0]>matrix[1] && matrix[0]>matrix[2] && matrix[0]>matrix[3] && matrix[0]>matrix[4]){
//         console.log("Index 1 is greater")
//     }else if(matrix[1]>matrix[0] && matrix[1]>matrix[2] && matrix[1]>matrix[3] && matrix[1]>matrix[4]){
//         console.log("Index 1 is greater");
//     }else if(matrix[2]>matrix[0] && matrix[2]>matrix[1] && matrix[2]>matrix[3] && matrix[2]>matrix[4]){
//         console.log("Index 2 is greater!!!")
//     }else{
//         console.log("Index 3 is greater")
//         break;
//     }
// }

//6

// let n=28;
// let sum=0;

// for(let i=1;i<n;i++){
//     if(n%i===0){
//         sum+=i;
//     }
// }
// if(sum===n){
//     console.log("Perfect Number!!!!")
// } else{
//     console.log("Not a perfect square")
// }

//7

// let square=1;
// for(let i=1;i<=8;i++){
//     square*=2
//     console.log(square)
// }

//8

// let a=0;
// let b=1;

// for(i=1;i<=20;i++){
//     console.log(a);

//     let next=a+b;
//     a=b;
//     b=next;
// }

//9

// let sum=0;
// let matrix=[45, 78, 90, 32, 56, 88];
// for(i=0;i<=matrix.length-1;i++){
//     sum=matrix[0]+matrix[1]+matrix[2]+matrix[3]+matrix[4]+matrix[5]
//     sum=sum/6
// }
// console.log(sum)

//10
// const decimalNum = 25;
// const binaryString = decimalNum.toString(2); 

// console.log(binaryString);


                  //Part I-a] break inside a for Loop
//1

// for(i=1;i<=10;i++){
//     if(i==7){
//         break;
//     }
//     console.log(i)
// }

//2

// let correctPassword = "1234";
// let accessGranted = false;

// for (let i = 1; i <= 5; i++) {
//     let password = prompt("Enter password:");

//     if (password === correctPassword) {
//         console.log("Access granted");
//         accessGranted = true;
//         break;
//     }
// }

// if (accessGranted === false) {
//     console.log("Account locked");
// }

//3


// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
//     if (sum > 100) {
//         sum -= i;
//         console.log("Last number added:", i - 1);
//         break;
//     }
// }

//4


// let names = ["Aman", "Rahul", "Sneha", "Sumit", "Sahil"];

// for (let i = 0; i < names.length; i++) {
//     if (names[i][0] == "S") {
//         console.log(names[i]);
//         break;
//     }
// }


//Part III: Do-While Loop

// let i=1;
// do{
//     console.log(i);
//     i--;
// }while(i>=1);

// let i = 1;
// do {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;  //condition me update bahar krna hota
// } while (i <= 20);

// let i=0;
// let sum=0;
// do{
//     sum+=i;
//     i++;
// }while(i<=10);
// console.log(sum);

// let n=234;
// let product=1;
// let i=n;
// do{
//     product *=i%10;
//     i=Math.floor(i/10);
// }while(i>0);
// console.log(product);

// let num=1234;
// do{
//     num=Math.floor(num/10)
// }while(num>10);
// console.log(num)

// let base=3;
// let exponent=4;
// let result=1;
// let i=1;
// do{
//     result *=base;
//     i++;
// }while(i<=exponent);
// console.log(result)

// let num=2123;
// let original=num;
// let reverse=0;
// do{
//     let lastDigit=0;
//     reverse=reverse*10+lastDigit;
//     num=Math.floor(num/10);
// }while(num>0);
// if (original === reverse) {
//     console.log("Number is Palindrome");
// } else {
//     console.log("Number is not palindrome");
// }


