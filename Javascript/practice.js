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