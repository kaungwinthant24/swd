let total = 0;

const fruits = {
    apple : 500,
    banana : 200,
    grape : 1000,
    lemon : 100,
    orange : 300
};

// const receipts = [];

function tax(amount,taxRate=5){
    return amount * (taxRate/100);
}

function buy(fruitName,qty){
    let cost = fruits[fruitName] * qty;
    total += cost;  

    // const receiptObj = {
    //     fruitName,
    //     qty,
    //     cost
    // };
    // receipts[receipts.length] = receiptObj;

    return `${fruitName} , ${qty} , ${cost}`;
}
console.log(buy('apple',3));
console.log(buy('banana',1));
console.log(buy('grape',2));
console.log(buy('lemon',5));
console.log(buy('orange',4));

// console.table(receipts);

console.log(`Total Cost = ${total} MMK`);
console.log(`Tax = ${tax(total)} MMK`)
console.log(`Net Total = ${total + tax(total)} MMK `);
