// for(let i=1; i <= 5; i++){
//     // if(i === 3) break;
//     if(i === 3) continue;
//     console.log(i);
// }

// const words = ['a','b','c','d','e','f'];
// for(let i = 0; i < words.length; i++){
//     console.log(`index = ${i} and word = ${words[i]}`);
// }

//  const marks = [68,62,69,66,56,85];
//  let totalMark = 0;
//  for(let mark = 0; mark < marks.length; mark++){
//     totalMark += marks[mark];
//     console.log(marks[mark]);
//  }
// console.log(`Total mark is ${totalMark}`);


// ===========================================================

// const mgmgInfo = {
//     name: 'Mg Mg',
//     age: 23,
//     marks: [
//         {
//             id: 1,
//             subject: "Myanmar",
//             mark: 39
//         },
//         {
//             id: 2,
//             subject: "English",
//             mark: 62
//         },
//         {
//             id: 3,
//             subject: "Mathematic",
//             mark: 69
//         },
//         {
//             id: 4,
//             subject: "Chemistry",
//             mark: 65
//         },
//         {
//             id: 5,
//             subject: "Physics",
//             mark: 56
//         },
//         {
//             id: 6,
//             subject: "Bio",
//             mark: 85
//         }
//     ]
// };
// console.log(mgmgInfo.marks[0].mark);

// to put information
// mgmgInfo.totalMark = 0; 
// mgmgInfo.results = {};

// for(let i=0; i<mgmgInfo.marks.length; i++){

//     // for each mark and total of it 
//     console.log(mgmgInfo.marks[i].mark);
//     mgmgInfo.totalMark += mgmgInfo.marks[i].mark;

//     // for information (which subject is success or fail) 
//     mgmgInfo.results[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark >= 40 ? "Success" : "Fail";
// }
// console.log(mgmgInfo);

// ===========================================================
// Nested loop 

function starGenerator(count,output = '* '){
    let star = '';
    for(let x=1; x<=count; x++){
        // console.log('*');
        star += output;
    }
    return star;

}
// console.log(starGenerator(5));

// for(let i=1; i<=6; i++){
//     // // simple nesting method
//     // // ---------------------
//     // let star = "";
//     // for(let x=1; x<=i; x++){
//     //     star += "* "
//     // }
//     // console.log(star,i);

//     // invote method 
//     // -------------
//     console.log(starGenerator(i));
// }

// for(let i=6; i>=1; i--){
//     // // simple nesting method
//     // // ---------------------
//     // let star = '';
//     // for(let x=1; x<=i; x++){
//     //     star += '* '
//     // }
//     // console.log(star,i);

//     // invote method 
//     console.log(starGenerator(i));
// }

// for(let i=1; i<=6; i++){
//     // console.log(i,i%2===0 ? '=' : '*');
//     // by expression 
//     // console.log(starGenerator(i,(i%2 === 0) ? '= ' : '* '));

//     // by statement 
//     if(i%2 === 0){
//         console.log(starGenerator(i,'= '));
//     }else{
//         console.log(starGenerator(i,'* '));
//     }
// }

// for(let i = 1; i<=5; i++){
//     let result = '';
//     for(let x = 1; x<=5; x++){
//         if(x <= i){
//             result += '* ';
//         }else{
//             result += '- ';
//         }
//     }
//     console.log(result,i);
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

 for(let i = 0; i<results.length; i++){
    // console.log(results[i],i);
    let result = '';
    for(let x=1; x<=5; x++){
        if(x <= results[i].rate){
            result += '* ';
        }else{
            result += '- ';
        }
    }
    console.log(`${results[i].id} | ${result} | ${results[i].name}`);
    if(i === results.length-1){
    }else{
        console.log('_ _ _ _ _ _ ');
    }
 }