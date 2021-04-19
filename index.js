// Code your solutions in this file
function writeCards(stringNames , stringPa){
    let text = []
    for(i = 0; i<stringNames.length; i++){
        let insideText
        insideText = `Thank you, ${stringNames[i]}, for the wonderful ${stringPa} gift!`
        text.push(insideText)
    }
    return text    
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

// function countDown(numberPa){
//     while(i < numberPa){
//         console.log(numberPa);
//         let sayiFalan = numberPa - 1
//         if(sayiFalan = 0){
//             break;
//         }
//         i++;
//         return sayiFalan 
//     }

// }

// countDown(10);



function countDown(numberPa){
    let j = -1
    const emptyArray = []
    while(j < numberPa){
        console.log(numberPa);
        emptyArray.push(numberPa);
        numberPa -= 1;
        // console.log(emptyArray)
    }
}
countDown(10);


