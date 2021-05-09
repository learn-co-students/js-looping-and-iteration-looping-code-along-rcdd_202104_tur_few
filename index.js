// Code your solutions in this file
function writeCards(arr,eventName) {
  let arrayFile = [];
  for(let i = 0 ; i < arr.length; i++){
   let result = `Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`;
   arrayFile.push(result);
  }
  return arrayFile;
}


writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");


function countDown(num) {
let i = num;
while (i >= 0) {
console.log(i);
i--;
  }
}
 
countDown(10);