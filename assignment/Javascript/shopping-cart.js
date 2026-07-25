const iphoneIncrease = document.getElementById("iphone-increase");
iphoneIncrease.addEventListener("click", function(){
    const iphoneCount = document.getElementById("iphone-count");
    const iphoneCountNumber = parseInt(iphoneCount.value);
    const iphoneNewCount = iphoneCountNumber + 1;

    document.getElementById("iphone-count").value = iphoneNewCount;

    const iphonePrice = document.getElementById("iphone-price");
    const iphonePriceAmount = parseFloat(iphonePrice.innerText);
    const iphoneTotalPrice = iphoneNewCount * 1219;

    document.getElementById("iphone-price").innerText = iphoneTotalPrice;

    const caseCount = document.getElementById("case-count");
    const caseCountNumber = parseInt(caseCount.value);

    const totalPrice = iphoneTotalPrice + caseCountNumber * 59;
    document.getElementById("total-price").innerText = totalPrice;

    const taxAmount = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = taxAmount;

    document.getElementById("grand-total").innerText = totalPrice + taxAmount;

})

const iphoneDecrease = document.getElementById("iphone-decrease");
iphoneDecrease.addEventListener("click", function(){
    const iphoneCount = document.getElementById("iphone-count");
    const iphoneCountNumber = parseInt(iphoneCount.value);
    let iphoneNewCount = iphoneCountNumber;
    if(iphoneCountNumber > 0){
        iphoneNewCount = iphoneCountNumber - 1;
    }

    document.getElementById("iphone-count").value = iphoneNewCount;

    const iphonePrice = document.getElementById("iphone-price");
    const iphonePriceAmount = parseFloat(iphonePrice.innerText);
    const iphoneTotalPrice = iphoneNewCount * 1219;

    document.getElementById("iphone-price").innerText = iphoneTotalPrice;

    const caseCount = document.getElementById("case-count");
    const caseCountNumber = parseInt(caseCount.value);

    const totalPrice = iphoneTotalPrice + caseCountNumber * 59;
    document.getElementById("total-price").innerText = totalPrice;

    const taxAmount = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = taxAmount;

    document.getElementById("grand-total").innerText = totalPrice + taxAmount;
})


const caseIncrease = document.getElementById("case-increase");
caseIncrease.addEventListener("click", function(){
    const caseCount = document.getElementById("case-count");
    const caseCountNumber = parseInt(caseCount.value);
    const caseNewCount = caseCountNumber + 1;

    document.getElementById("case-count").value = caseNewCount;

    const casePrice = document.getElementById("case-price");
    const casePriceAmount = parseFloat(casePrice.innerText);
    const caseTotalPrice = caseNewCount * 59;

    document.getElementById("case-price").innerText = caseTotalPrice;

    const iphoneCount = document.getElementById("iphone-count");
    const iphoneCountNumber = parseInt(iphoneCount.value);

    const totalPrice = caseTotalPrice + iphoneCountNumber * 1219;
    document.getElementById("total-price").innerText = totalPrice;

    const taxAmount = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = taxAmount;

    document.getElementById("grand-total").innerText = totalPrice + taxAmount;
})

const caseDecrease = document.getElementById("case-decrease");
caseDecrease.addEventListener("click", function(){
    const caseCount = document.getElementById("case-count");
    const caseCountNumber = parseInt(caseCount.value);
    let caseNewCount = caseCountNumber;
    if(caseCountNumber > 0){
        caseNewCount = caseCountNumber - 1;
    }

    document.getElementById("case-count").value = caseNewCount;

    const casePrice = document.getElementById("case-price");
    const casePriceAmount = parseFloat(casePrice.innerText);
    const caseTotalPrice = caseNewCount * 59;

    document.getElementById("case-price").innerText = caseTotalPrice;

    const iphoneCount = document.getElementById("iphone-count");
    const iphoneCountNumber = parseInt(iphoneCount.value);

    const totalPrice = caseTotalPrice + iphoneCountNumber * 1219;
    document.getElementById("total-price").innerText = totalPrice;

    const taxAmount = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = taxAmount;

    document.getElementById("grand-total").innerText = totalPrice + taxAmount;
})