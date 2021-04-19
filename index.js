function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  } 

return writeCards;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");


let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--);
}