// Code your solutions in this file
function writeCards(names) {
  let arr = [];
  for (let item of names) {
    arr.push(`Thank you, ${item}, for the wonderful surprise gift!`);
  }
  return arr;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
