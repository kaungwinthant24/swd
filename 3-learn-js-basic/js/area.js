// console.log('this is area js');
const showResults = [];
function calculateArea(width,breatdh){
    let result = width * breatdh;
    const input = {
        width: width + ' ft',
        breatdh: breatdh + ' ft',
        result: result + 'sq ft'
    };
    showResults[showResults.length] = input;
    return result+ ' sq ft';
}
console.log(calculateArea(20,60));
console.log(calculateArea(30,60));
console.log(calculateArea(40,60));

console.table(showResults);