
let newArray=[];
function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    // console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    newArray[i] = "Thank you, " + name[i] + ", for the wonderful " + event + " gift!";
  } 

return newArray;
}

writeCards([ 'Lisa', 'Kaitlin', 'Jan'], 'surprise');


function countDown(){
    let countDown = 10;
    while (countDown > -1) {
      console.log(countDown--)
    }
  }
