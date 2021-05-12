// Code your solutions in this file

function writeCards (arr, event) {

    let messages = [];

    for(let i = 0; i < arr.length; i++){
        let result = "Thank you, " + arr[i] + ", for the wonderful " + event + "gift!";
        messages.push(result);
    }
    return messages;
}

function countDown (int) {
    while (int >= 0) {
        console.log(int);
        int --;
    }
}

