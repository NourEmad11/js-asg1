// Question 1
//var number = +window.prompt('Enter a number');
//console.log(number);

// Question 2
//var number2 = +window.prompt('Enter a number');
//if(number2 % 3 == 0 && number2 % 4 == 0){
  //  console.log("Yes");
//}
//else{
//    console.log("No");
//}

// Question 3
//var num1 = +window.prompt('Enter the first number');
//var num2 = +window.prompt('Enter the second number');
//if(num1 > num2){
//  console.log(num1);
//} else if (num2 > num1){
//    console.log(num2);
//}
//else{
//    console.log('They are equal');
//}
// Question 4 
/* var int = +window.prompt('Enter an integer');
if(int < 0){
    console.log('It is a negative number');
} else{
    console.log('It is a positive number');
} */
// Question 5
/*var num1 = +window.prompt('Enter the first number');
var num2 = +window.prompt('Enter the second number');
var num3 = +window.prompt('Enter the third number');

if( num1 > num2 && num1 > num3){
    console.log( 'Max number = ' + num1);
} else if (num2 > num1 && num2 > num3){
    console.log( 'Max number = ' + num2);
} else{
    console.log( 'Max number = ' + num3);
}
if( num1 < num2 && num1 < num3){
    console.log( 'Min number = ' + num1);
} else if (num2 < num1 && num2 < num3){
    console.log( 'Min number = ' + num2);
} else{
    console.log( 'Min number = ' + num3);
} */
// Question 6 7
/*var number = +window.prompt('Enter a number');
if (number % 2 == 0){
    console.log('Even number')
}
else{
    console.log('Odd number')
} */
//Question 8
/*var char = window.prompt('Enter a letter').toLowerCase();

if (char.length === 1 && char >= 'a' && char <= 'z') {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        console.log('It is a vowel');
    } else{
        console.log('Consonant');
    }
} */
// Question 9
 /*var number = +window.prompt('Enter a number');
 for (var i = 1 ; i <= number ; i++ ){
    console.log(i );

 }*/
// Question 10
/*var number = +window.prompt('Enter a number');
 for (var i = 1 ; i <= 12 ; i++ ){
    console.log(i * number);
 }*/

    // Question 11
/*var number = +window.prompt('Enter a number');
for(var i = 2 ; i<= number ; i+=2){
    console.log(i);
}*/

// Question 12
/*
var number1 = +window.prompt('Enter first number');
var number2 = +window.prompt('Enter second number');
var result = number1 ** number2;
console.log(result);
*/
// Question 12
/*
var grade1 = +window.prompt('Enter first grade');
var grade2 = +window.prompt('Enter second grade');
var grade3 = +window.prompt('Enter third grade');
var grade4 = +window.prompt('Enter fourth grade');
var grade5 = +window.prompt('Enter fifth grade');

var total = grade1 + grade2 + grade3 + grade4 + grade5;
var average = total / 5;
var percentage = (total / 500) * 100; 

console.log("Total Marks = " + total);
console.log("Average Marks = " + Math.round(average));
console.log("Percentage = " + Math.round(percentage) + "%");
*/

// Question 13
/*
var month = +window.prompt('Enter the month number');
var days;
if( month === 1 ||  month === 3 ||  month === 5 ||  month === 7 ||  month === 8 ||  month === 10 ||  month === 12 ){
    days = 31;
    console.log('Number of days is 31')
}else if (month === 4 || month === 6 || month === 9 || month === 11){
    days = 30;
    console.log('Number of days is 30')
}else if (month === 2) {
    days = 28;
    console.log('Number of days is 28')
  } else {
    console.log("Invalid month number!");
  }
*/
// Question 14 
/*
var grade1 = +window.prompt('Enter first grade');
var grade2 = +window.prompt('Enter second grade');
var grade3 = +window.prompt('Enter third grade');
var grade4 = +window.prompt('Enter fourth grade');
var grade5 = +window.prompt('Enter fifth grade');

var total = grade1 + grade2 + grade3 + grade4 + grade5;
var percentage = (total / 500) * 100; 
var grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 40) {
  grade = "E";
} else {
  grade = "F";
}
console.log("Total Marks: " + total);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
*/

// SWITCH CASES 
// Question 15
/*
var month = +window.prompt('Enter the month number');
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('Number of days is 31')
        break;
    
       
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('Number of days is 30')
        break;
    case 2:
        console.log('Number of days is 28')
        break;
    default:
        console.log("Invalid month number!");
}
*/
// Question 16
/*
var letter = window.prompt('Enter a letter').toLowerCase();
if (letter.length === 1 && letter >= 'a' && letter <= 'z') {
    switch(letter){
        case "a" :
        case "e" :
        case "o" :
        case "u" :
        case "i" :
            console.log('This is a vowel')
            break;
        default:
            console.log("This is a consontant")
        }
}
else{
    console.log('Please enter one letter')
}
*/
// Question 17
/*
var num1 = +window.prompt('Enter the fisrt number');
var num2 = +window.prompt('Enter the second number');
switch(true){
    case num1 > num2 :
        console.log('The maximum number is : ' + num1);
        break;
    case num2 > num1 :
        console.log('The maximum number is : ' + num2);
        break;
    default:
        console.log('Both numbers are equal')
}
*/
// Question 18
/*
var number = +window.prompt('Enter a number');
switch(true){
    case number % 2 == 0:
        console.log('Even Number')
        break;
    case number % 2 == 1:
        console.log('Odd Number')
         break;
}
*/
// Question 19 
/*
var number = +window.prompt('Enter a number');
switch(true){
    case number>0:
        console.log('Postive Number');
        break;
    case number<0:
        console.log('Negative Number');
        break;
    case number == 0:
        console.log("Zero!")
}
*/
// Question 20
/*
var num1 = +window.prompt('Enter first number');
var num2 = +window.prompt('Enter second number');
var operator = window.prompt('Choose operator ( + , - , * , / :');
var result;
switch(operator){
    case '+':
        result = num1 + num2 ;
        break;
    case '-':
        result = num1 - num2 ;
        break;
    case '*':
        result = num1 * num2 ;
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = "Error: Division by zero!";
          }
          break;
    default:
        console.log('Enter a valid operator')
}
console.log("Result: " + result);
*/

