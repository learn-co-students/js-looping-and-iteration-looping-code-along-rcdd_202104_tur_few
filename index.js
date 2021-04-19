// Code your solutions in this file

const gifts = ["Lisa", "Kaitlin", "Jan"];

function writeCards(gifts){
    let message = [];
    for (let i=0 ; i< gifts.length ; i++){
        message.push(`Thank you, ${gifts[i]}, for the wonderful surprise gift!`);
console.log(gifts[i]);
}
return message;
}




function countDown() {
    let i=10;
while (i>=0){
    console.log(i);
    i--
}
}