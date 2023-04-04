
const fruits = ['apple','orange','mango','banana','grape','lemon','coconut'];

// of => use to loop Array 
// for(fruit of fruits){
//     console.log(fruit);
// }

// in => use to loop Object 
// for(index in fruits){
//     // console.log(index,typeof index);
//     console.log(fruits[index]);
// }

const results = [
    {
        id : 1,
        name : 'Mg Mg',
        rate : 4
    },
    {
        id : 2,
        name : 'Bo Bo',
        rate : 3
    },
    {
        id : 3,
        name : 'Ag Ag',
        rate : 5
    },
    {
        id : 4,
        name : 'Soe Soe',
        rate : 2
    },
    {
        id : 5,
        name : 'Hla Hla',
        rate : 1
    },
    {
        id : 6,
        name : 'Kaung Kaung',
        rate : 3
    }
];

for(key1 in results){
    // console.log(results[key1]);
    for(key2 in results[key1]){
        console.log(key2,' = ',results[key1][key2]);
    }
    if(key1 != results.length-1){
        console.log('_ _ _ _ _ _ _');
    }
    else{

    }
}