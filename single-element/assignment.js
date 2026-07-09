// feetToMile

function feetMile(feet){
    var mile = feet/5280;
    return mile;
}
console.log('Total Mile =', feetMile(204832))


// woodCalculator

// chair 1 qbfeet
// table 3 qbfeet
// bed 5 qbfeet

// need 14 char 5 table 12 bed

function woodCalculator(chairQty, tableQty, bedQty){
    const char = 1;
    table = 3;
    bed = 5;

    var totalWood = chairQty * char + tableQty * table + bedQty * bed;

    return totalWood;
}
console.log('Total Wood Required =', woodCalculator(14, 5, 12))



// brickCalculator
// 1000 brick for per 1 feetToMile

// 15 feet 1-10 floor
// 12 feet 11=20 floor
// 10 feet 21-... floor

// need funtion for 47

function brickCalculator(floor){
    const firstTenFloor = 10;
    firstTenFloorFeet = 15;


    secondTenFloor = 20;
    secondTenFloorFeet = 12;


    otherFloorFeet = 10;

    preOneFeet = 1000;

    if(floor <= 10){
        var totalfeet = floor * firstTenFloorFeet;
    }
    else if(floor <= 20){
        var totalfeet = (floor - firstTenFloor) * secondTenFloorFeet + firstTenFloor * firstTenFloorFeet;
    }
    else{
        var totalfeet = (floor - secondTenFloor) * otherFloorFeet + secondTenFloor * secondTenFloorFeet;
    }
    return totalfeet;
}

console.log('Total Building Feet =', brickCalculator(47), '& Need Total Bricks =', brickCalculator(47)*preOneFeet);


// tinyFriend
// var feet = 43;



