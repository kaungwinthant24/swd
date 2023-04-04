// mmk to usd | 1 usd = 2100 mmk
// mmk to eur | 1 eur = 2277.7 mmk
// mmk to sgu | 1 sgu = 1589.6 mmk
const rates = {
    usd : 2100,
    eur : 2277.7,
    sgu : 1589.6,
    mmk : 1
};


    // 1. form any currency to mmk 
function toMMK(inputAmount,fromCurrency){
    return inputAmount*rates[fromCurrency] + ' MMK';
}
// console.log(toMMK(500,"usd"));
// console.log(toMMK(500,"eur"));
// console.log(toMMK(500,"sgu"));

    // 2. from mmk to any currency 
function toCurrency(inputMMK,currency){
    return inputMMK/rates[currency] + ' ' + currency;
}
// console.log(toCurrency(500000,'usd'));
// console.log(toCurrency(500000,'eur'));
// console.log(toCurrency(500000,'sgu'));

    // 3. from any currency to any currency   
function exchange(inputCurrency,fromCurrency,toCurrency){
    let toMMK = inputCurrency * rates[fromCurrency];
    let finalCurrency = toMMK / rates[toCurrency];
    return finalCurrency + ' ' + toCurrency;
}
console.log(exchange(200,'usd','eur'));
console.log(exchange(10,'usd','usd'));
console.log(exchange(40,'eur','sgu'));
console.log(exchange(4000,'mmk','sgu'));