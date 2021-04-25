/*let names = "";
let event = "";
function writeCards() {
  for (let i = 0; i < names.length; i++) {
    console.log('Thank you, ${names[i]} for the wonderful ${event[i]}  gift!');

  return names;
}
// console.log("Thank you, " + $names[i] + " for the wonderful " + ${event} + " gift!");
} */

const names = ['Lisa', 'Kaitlin', 'Jan'];
const event =  "surprise";
function writeCards(names, event) {
    let message = []
for (let i=0; i<names.length; i++){

  message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`) ;
  //console.log("Thank you, "+  name[i] + " for the wonderful " +  event + " gift!" )
} return message;
}
//writeCards(collection);
/*
const names = ['Lisa', 'Kaitlin', 'Jan'];
const event= "surprise";
function writeCards(names, event) {
let paragraph = []
for (let i = 0; i < names.length; i++) {
paragraph.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
 }
return paragraph;
}

*/
/*
const names = ['Lisa', 'Kaitlin', 'Jan'];
const event= "surprise";
function writeCards(names, event) {
for (let i = 0; i < names.length; i++) {
   console.log(`Thank you, ${names[i]} , for the wonderful ${event} gift!`);
 }
}
writeCards(names,event);

*/



function countDown() {
  let numero=10;
  while (numero>=0) {
    console.log(numero--);
  }
}





// Code your solutions in this file
