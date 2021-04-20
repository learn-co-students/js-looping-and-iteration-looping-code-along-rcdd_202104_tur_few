// Code your solutions in this file
function writeCards(array, string){
    let arr = [];
for (let i = 0; i < array.length; i++){
    arr[i] = "Thank you, " + array[i] + ", for the wonderful " + string + " gift!";
}
return arr;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}