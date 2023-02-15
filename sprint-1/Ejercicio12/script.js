let sentence1 = "Hola MUNDO";
let vowels = "aeiou";

function countVowels() {
  let counter = 0;
  for (let i = 0; i < sentence1.length; i++) {
    for (let x = 0; x < vowels.length; x++) {
      if (sentence1[i].toLowerCase() === vowels[x].toLowerCase()) {
        counter++;
      }
    }
  }
  return counter;
}
