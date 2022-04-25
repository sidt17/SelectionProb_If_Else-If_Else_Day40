let a= 50;
let b= 40;
let c= 80;

let result1= a + b * c
let result2 = a % b + c
let result3 = c + a / b
let result4= a * b + c

console.log("Result1 " + result1);
console.log("Result2 " + result2);
console.log("Result3 " + result3);
console.log("Result4 " + result4);


if(result1>result2 && result1>result3 && result1>result4)
{
    console.log("The Max number is :" + result1)
} 
else if(result1<result2 && result1<result3 && result1<result4)
{
    console.log("The Min number is :" + result1)
}

if(result2>result1 && result2>result3 && result2>result4)
{
    console.log("The Max number is :" + result2)
} 
else if(result2<result1 && result2<result3 && result2<result3)
{
    console.log("The Min number is :" + result2)
}
if(result3>result1 && result3>result2 && result3>result4)
{
    console.log("The Max number is :" + result3)
} 
else if(result3<result1 && result3<result2 && result3<result4)
{
    console.log("The Min number is :" + result3)
}
if(result4>result1 && result4>result2 && result4>result3)
{
    console.log("The Max number is :" + result4)
} 
else if(result4<result1 && result4<result2 && result4<result3)
{
    console.log("The Min number is :" + result4)
}