// Code your solutions in this file
function countDown (int){
    int = 0;
    while (int <= 10) {
      console.log(int++);
    }

}
function writeCards(stringNames , stringPa){
  let text = []
  for(let i = 0; i<stringNames.length; i++){
      let insideText
      insideText = `Thank you, ${stringNames[i]}, for the wonderful ${stringPa} gift!`
      text.push(insideText)
  }
  return text    
}


