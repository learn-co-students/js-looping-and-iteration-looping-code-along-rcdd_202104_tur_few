// Code your solutions in this file
function writeCards(x, y){
        const array = [];
        for (let i = 0; i < x.length; i++){
                array[i] = `Thank you, ${x[i]}, for the wonderful surprise gift!`;
        }
        return array;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown (integerValue){
        while (integerValue >= 0){
                console.log(integerValue);
                integerValue--;
        }
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGift (gift){
        for (let i = 0; i < gifts.length; i++){
                console.log(`Wrapped ${gifts[i]} and added a bow!`);
        }

        let i = 0;
        while (i < gifts.length){
                console.log(`Wrapped ${gifts[i]} and added a bow!`);
                i++; 
        }

        return gifts;
}

