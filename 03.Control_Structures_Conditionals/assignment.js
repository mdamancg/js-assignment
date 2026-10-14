const prompt=require("prompt-sync")();
// A] if Statement
// let num=25;
// if(num%5==0){
//     console.log("Number is divisible by 5")
// }
//2
// let age=60;
// if(age>=60){
//     console.log("Senior citizen")
// }
//3
// let number=101;
// if(number>100){
//     console.log("Big int!!")
// }

//4
// let temp=9;
// if(temp<10){
//     console.log("Very cold")
// }

//5
// let score=100;
// if(score>=100){
//     console.log("Perfect score!!!!!")
// }

//6
// let num=-1
// if(num<0){
//     console.log("Number is negative!!!")
// }

//7
// let str=""
// if(str==""){
//     console.log("No input provided!!!!")
// }

//8
// num=200;
// if(num%100==0){
//     console.log("century year!!!!")
// }

//9
// let numb=20;
// if(numb%2==0 && numb>=0){
//     console.log("Number is positive and even!!!!")
// }

//10
// let numb=88;
// if(numb>35 && numb<100){
//     console.log("Number is greater than 35 and less than 100 !!!")
// }

//B] if...else Statement
//1
// numb=20;
// if(numb%2==0){
//     console.log("Even")
// }else{
//     console.log("Odd");
// };

//2

// let age=19;
// if(age>=18){
//     console.log("Adult")
// }else{
//     console.log("Not Adult!!!!")
// }

//3

// let num=4;
// if(num>=0){
//     console.log("Number is positive")
// }else{
//     console.log("Number is negative")
// }

//4
// let marks=35;
// if(marks>=35){
//     console.log("Pass")
// }else{
//     console.log("Fail")
// }

//5
// let char=AMAN;
// if(char==AMAN){
//     console.log("Char in upper case!!")
// }else{
//     console.log("Char not in uppercase!!!")
// }

//6

// number=9;
// if(number%3==0){
//     console.log("Number is divisible by 3:",number)
// }else{
//     console.log("Number is not  divisible by 3: ",number)
// }

//7
// let password="admin123"
// if(password=="admin123"){
//     console.log("Login successfull")
// }else{
//     console.log("Incorrect password!!!!!")
// }

//8

// let year=2024;
// if(year%4==0){
//     console.log("Year is leap year")
// }else{
//     console.log("Not a leap year!!!!")
// }

//9

// let number1=9;
// let number2=10
// if(number1>number2){
//     console.log("Number 1  is greatrer than number 2")
// }else{
//     console.log("Number 2 is greater than number 1");
// }

//10
// let number=10;
// if(number>=0 || number<0||number==0){
//     console.log("Number is greater than 0")
// }else{
//     console.log("Invalid data!!!")
// }

//C] if...else if...else Statement

//1
// let month=3;
// if(month==12||month==1||month==2){
//     console.log("Winter")
// }else if (month==3||month==4||month==5){
//     console.log("Summer")
// }else if (month==6||month==7||month==8){
//     console.log("Monsoon")
// }else{
//     console.log("Autumn")
// }

//2

// let income=200000
// if (income < 300000){
//     console.log("No tax")
// }else if(income<700000){
//     console.log("5% text requird")
// }else if (income<1000000){
//     console.log("10% tax require")
// }else{
//     console.log("15% tax require")
// }

//3

// let marks=89;
// if(marks>=90){
//     console.log("Outstanding")
// }else if (marks<=89){
//     console.log("Good")
// }else if (marks<=69){
//     console.log("Average")
// }else{
//     console.log("Need improvement")
// }

//4

// let speedOfvehical=90;
// if(speedOfvehical<40){
//     console.log("Slow")
// }else if(speedOfvehical<=80){
//     console.log("Normal")
// }else{
//     console.log("Fast")
// }

//5

// let height=149;
// if(height<150){
//     console.log("Short")
// }else if (height<=170){
//     console.log("Average")
// }else{
//     console.log("Tall")
// }

//6

// let day=5
// if(day<=5){
//     console.log("Weekday")
// }else{
//     console.log("Weekend")
// }

//7

// let unit=150;
// if(unit<=50){
//     console.log(unit*2)
// }else if(unit<=150){
//     console.log((unit*2)+(unit-50)*7)
// }else{
//     console.log(unit*2+(unit*4)+(unit-150)*6)
// }

//8

// let marks=49;
// if(marks>=90){
//     console.log("Excellent")
// }else if (marks>75){
//     console.log("Good")
// }else if (marks>50){
//     console.log("Satisfactory")
// }else{
//     console.log("Poor")
// }

//9

//let num1=5;
// let num2=6;
// let num3=7;
// if(num1>=num2 && num1>=num3){
//     console.log("Number 1 is greter")
// }else if (num2>=num1 && num2>=num3){
//     console.log("Number 2 is greter")
// }else{
//     console.log("Number 3 is greater!!!!!")
// }

//10

// let number=9;
// if(number>0 && number%2==0){
//     console.log("Positive even")
// }else if(number>0 && number%2!=0){
//     console.log("Positive odd")
// }else if (number<0 && number%2==0){
//     console.log("Negative even!!")
// }else if(number<0 && number%2!=0){
//     console.log("Negative odd!!!")
// }else if (number==0){
//     console.log("Equal to zero")
// }else{
//     console.log("Invalid data")
// }

//D. Nested if Statement

//1
// let number=10;
// if(number<=10){
//     if(number%3==0){
//         console.log("Number is greater than and equal to 10 and divisible by 3")
//     }
// }

//2
// let personAge=18;
// let HaveVoterId=true;
// if(personAge>=18){
//     if(HaveVoterId==true){
//         console.log("Eligible for vote")
//     }
// }

//3
// let score=90;
// if(score>40){
//     if(score>80){
//         console.log("Passed with Distinction")
//     }
// }

//4

// let pin=1234;
// let balance=500;
// if(pin===1234){
//     if(balance===500){
//         console.log("Can withdrawal")
//     }
// }

//5

// let year=2000;
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("Leap year")
//         }
//     }
// }

//6

// let email="abc@gmail.com"
// let endWith=".com"
// if(email=="abc@gmail.com"){
//     if(endWith==".com"){
//         console.log("Valid email")
//     }
// }

//switch Statement

//1

// let month=2;
// switch(month){
//     case 1:
//         console.log("31 Days")
//         break;
//     case 2:
//         console.log("28 Days")
//         break;
//     case 3:
//         console.log("30 Days")
//         break;
//     case 4:
//         console.log("31 Days")
//         break;
//     case 5:
//         console.log("30 Days")
//         break;
//     case 6:
//         console.log("31 Days")
//         break;
//     case 7:
//         console.log("31 Days")
//         break;
//     case 8:
//         console.log("30 Days")
//         break;
//     case 9:
//         console.log("31 Days")
//         break;
//     case 10:
//         console.log("31 Days")
//         break;
//     case 11:
//         console.log("31 Days")
//         break;
//     case 12:
//         console.log("31 Days")
//         break;
//     default:
//         console.log("Enter valid data");
    
// }

//2

// let char="A"

// switch(true){
//     case char=="a" ||char=="e" ||char=="i" ||char=="o" ||char=="u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }

//3

// let number=4;
// switch(true){
//     case number==1 || number==2:
//         console.log("Winter")
//         break;
//     case number==3 ||number==4:
//         console.log("Summer")
//         break;
//     default:
//         console.log("Enter number between 1 to 4")
// }

//4

// let marks=75;
// switch(true){
//     case marks>=75:
//         console.log("Distinction")
//         break;
//     case marks>=60:
//         console.log("1st class")
//         break;
//     case marks>=50:
//         console.log("2nd class")
//         break;
//     case marks>=35:
//         console.log("3rd class")
//         break;
//     case marks<35:
//         console.log("Failed")
//         break;
//     default:
//         console.log("Enter valid data!!!")
// }

//5

// let role = "admin";

// switch(role){
//     case "admin":
//         let action = "delete";
//         switch(action){
//             case "create":
//                 console.log("Admin did an action of create")
//                 action = "edit";
//                 break;
//             case "edit":
//                 console.log("Admin did an action edit")
//                 break;
//         }
//         break;

//     case "user":
//         console.log("Limited access")
//         break;
// }

//6

let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
  case "mango":
    console.log("Mango is yellow");
  case "banana":
    console.log("Banana is yellow");
  default:
    console.log("Unknown fruit");
}

