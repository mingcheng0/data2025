const readline = require('readline-sync')
var readlineSync = require('readline-sync')

var weight=0;
while(weight<10 || weight>120){
 weight=readline.questionInt("your wight in kg:");
}
var height=0
while(height<50 || height>250){
 height=readline.questionFloat("your height in cm:")
}
var bmi = weight/((height/100)**2);
console.log("Hello! Your BMI value is "+ bmi);
