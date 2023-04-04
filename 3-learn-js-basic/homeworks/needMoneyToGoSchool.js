
function busTicketPrice(price){
    return price >= 200 ? "Ok,Welcom From Our School Bus" : "Sorry,you only must walk";
}
console.log(busTicketPrice(199));

// =============================================

function pocketMoney(amount){
    let result;
    if(amount >= 1000){
        result = "Ok Thanks I love you";
    }else{
        result = "Sate Kout Twr P";
    }
    return result;
}
console.log(pocketMoney(1500));