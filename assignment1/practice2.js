//practice2-if ...else
//2-1
let age = 17;
if (age >= 18) {
  console.log("you can vote！");
} else {
  console.log("you can not vote！");
}
//2-2 check if a number is odd or even
let num =4;
if(num % 2 ==0)
console.log("number is even");
else{
  console.log("num is odd");
}
//2-3 declare 2 variable and check which one is big or they are equaled.
let numberA = 2;
let numberB = 3;
if (numberA > numberB ){
  console.log( "numberA is bigger than numberB");
}else if(numberA = numberB){
  console.log("numberA is equel to numberB");
}else{
  console.log("numberA is small to numberB");
}
//2-4 declare 3 cariables and check which one is big or they are equaled.
let A =7;
let B =3;
let C =1;
if(A > B && A > C){
  console.log(" A is the biggest number");
}else if(B> A && B > C){
  console.log("B is the biggest number");
}else if( C >A && C > B){
  console.log("C is the biggest number");
}else if(A == B && A == C){
  console.log(" 3 variables are wqual to each other");
}
//2-5 declare 2 variable for range (ex.10, 100),decalre another number variable and check a number is present in given range
let rangeA = 20;
let rangeB = 90;
let target = 95;

if (target >= rangeA && target <= rangeB) {
  console.log("target number is in given range");
} else {
  console.log("target number isn't in given range");
}
//2-6 declare a variable called year and checkthe year is leap year or not.
let year = 1989;

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("the year is leap year");
} else {
  console.log("the year is not leap year");
}