// conditional statement 
// control structue 
// flow control || control flow 

if(true){
    console.log('this is true');
}else{
    console.log('this is false');
}


    // use in function 
function canIJoin(wakeUpTime){

    // let result;
    // if(wakeUpTime<=9){
    //     result = 'You can join class'
    // }else{
    //     result = 'You can\'t join class';
    // }
    // return result;

    if(wakeUpTime <= 9){return 'You can join class'};
    return 'You can\'t join class';
}

console.log(canIJoin(8));
console.log(canIJoin(9.1));
console.log(canIJoin(9));   