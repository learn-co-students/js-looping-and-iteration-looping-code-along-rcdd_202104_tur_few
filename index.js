// Code your solutions in this file

const names = ['Lisa', 'Kaitlin', 'Jan'];
const event= "surprise";
function writeCards(names, event) {
let paragraph = []
for (let i = 0; i < names.length; i++) {
paragraph.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
 }
return paragraph;
}

function countDown() {
  let numero=10;
  while (numero>=0) {
    console.log(numero--);
  }
}
