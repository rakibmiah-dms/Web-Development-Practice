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



var burgerPrice = 750;
var cokePrice = 600;
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