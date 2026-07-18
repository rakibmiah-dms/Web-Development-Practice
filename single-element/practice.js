var number1 = 34;
var number2 = 20;
console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)

var price = -10;
var result = Math.abs(price);
console.log(result);

var price = 10.5003;
var result1 = Math.round(price);
var result2 = Math.ceil(price);
var result3 = Math.floor(price);
console.log(result1);
console.log(result2);
console.log(result3);

var randomNumber = Math.random() * 10;
var result4 = Math.round(randomNumber);
console.log(result4)



var burgerPrice = 450;
var cokePrice = 100;
var total = burgerPrice + cokePrice;
var cash = 500;
if(cash >= total){
    console.log("will buy burger and coke");
}
else if(cash >= burgerPrice){
    console.log("will buy burger");
}
else if(cash >= cokePrice){
    console.log("will buy coke");
}
else{
    console.log("don not buy anything. come back.");
}

var whileLoop = "While loop practice";
console.log(whileLoop);
var num = 0;
while(num < 5){
    console.log(num);
    num++
}

var forLoop = "For loop practice";
console.log(forLoop);
var forNum = [10, 20, 30, 40, 50, 60, 70, 80 ,90];
for(i = 0; i <= forNum.length; i++){
    var result = forNum[i];
    console.log(result);
}

var switchNum = 200;
switch(switchNum){
    case 300:
        console.log("i am 300");
        break;
    case 200:
        console.log('i am 200');
        break;
    case 100:
        console.log('i am 100');
        break;
    default:
        console.log('i am not anything')
}

function myFunction(fNum1, fNum2){
    var result = fNum1 + fNum2;
    return result;
}
var sum = myFunction(30, 50);
console.log(sum);

var inchToFeetConvert = 'Inch to feet convert';
console.log(inchToFeetConvert);

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var myHeight = inchToFeet(68);
console.log(myHeight);

var myFriendHeight = inchToFeet(72);
console.log(myFriendHeight);

const leapY = "check the year is leap year or not";
console.log(leapY);

function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2000));
console.log(isLeapYear(1700));



console.log('factorial practice by for loop')

var forFactorial2 = 1;
for(var i = 1; i <= 10; i++){
    forFactorial2 = forFactorial2 * i;
    console.log(i, forFactorial2)
}


function forFactorial(forFacNum){
    var forFactorial = 1;
    for(var i = 1; i < forFacNum; i++){
        forFactorial = forFactorial * i;
    }
    return forFactorial;
}
console.log(forFactorial(10))


console.log('factorial practice by while loop')

var i = 1;
var whileFactorial2 = 1;
while(i <= 10){
    whileFactorial2 = whileFactorial2 * i;
    i++;
    console.log(i, whileFactorial2)
}

function whileFactorial(WhileFacNum){
    var i = 1;
    whileFactorial = 1;
    while(i <= WhileFacNum){
        whileFactorial = whileFactorial * i;
        i++;
    }
    return whileFactorial;
}
console.log(whileFactorial(10));

console.log('factorial practice by recursive')

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
console.log(factorial(7));

console.log('fibonacci practice')

var fibo2 = [0, 1];
for(i = 2; i < 10; i++){
    fibo2[i] = fibo2[i - 1] + fibo2[ i - 2];
    console.log(fibo2[i], fibo2);
}

function fibo(n){
    var fibo = [0, 1];
    for(i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[ i - 2];
    }
    return fibo;
}
console.log(fibo(5));

function fibonacci(n){
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(10))

console.log('Swap practice')
var a = 5;
var b = 7;
console.log('before swap: a =', a, 'b =', b)
var temp = a;
var a = b;
var b = temp;
console.log('after swap: a =', a, 'b =', b)

var x = 5;
var y = 7;
console.log('before swap: x =', x, 'y =', y)
var x = x + y;
var y = x - y;
var x = x - y;
console.log('after swap: x =', x, 'y =', y)

var p = 5;
var q = 7;
// console.log('before swap: p =', p, 'q =', q)
[p, q] = [q, p]
console.log('after swap: p =', p, 'q =', q)


console.log('Find the largest element & sum of an array')
var marks = [209, 388, 847, 249, 278, 3749, 584, 28940, 48492, 209, 249, 584];
var max = marks[0];

for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('the highest valu is:', max)

function getArraySum(marks){
    var sum = 0;
    for(i = 0; i < marks.length; i++){
        var element = marks[i];
        sum = sum + element;
    }
    return sum;
}

console.log('the sum is:', getArraySum(marks))

var uniqueMarks = [];
for(i = 0; i < marks.length; i++){
    var element = marks[i];
    var index = uniqueMarks.indexOf(element);
    if(index == -1){
        uniqueMarks.push(element);
    }
}
console.log(uniqueMarks)


console.log('word count practice')
var speech = 'i am Rakib Miah. i work as a SEO expert at Nextlab.'
var count = 0;

for(var i = 0; i < speech.length; i++){
    if(speech[i] == " " && speech[i-1] !== " "){
        count++
    }
}
count++
console.log(count);

function reverseString(speech){
    var reverse = "";
    for(i = 0; i < speech.length; i++){
        var char = speech[i];
        reverse = char + reverse;
    }
    return reverse;
}
console.log(reverseString(speech));