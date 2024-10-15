function toCalculateMaturityAmount(){

    //get input value from the from element
    const principle=parseFloat(document.getElementById('principle').value)
    const interestRate=parseFloat(document.getElementById('rate').value)
    const tenure=parseFloat(document.getElementById('year').value)

    //perform the calculation
    const maturityammount=principle+(principle*interestRate*tenure)/100;

    document.getElementById('result').innerHTML=`Maturity Amount:${maturityammount.toFixed(2)}`;
}

//add listener
document.getElementById('calculateBtn').addEventListener('click',toCalculateMaturityAmount)
