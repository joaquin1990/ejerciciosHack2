let sentence2 = "Hola Mundo";
let vowels = "aeiou";

function countVowels(sentence1) {
  for (let i = 0; i < vowels.length; i++) {
    for (let x = 0; x < sentence1.length; x++) {
      // Decile si vowels[i] === sentence1[x], entonces sacale esa letra:
      // Para sacar la letra pasa la palabra a un array, usa split para sacarsela y despues con un join("") la volves a un string

      if (vowels[i].toLowerCase() === sentence1[x].toLowerCase()) {
        let array = sentence1.split("");
        array.splice(x, 1);
        sentence1 = array.join("");
      }
    }
  }

  return sentence1;
}

console.log(countVowels("Hola Mundo"));

// function removeVowels(anotherWord) {
//   let newWord = "";
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < anotherWord.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (anotherWord[i].toLowerCase() !== vowels[j]) {
//         console.log(anotherWord[i]);
//         newWord += anotherWord[i];
//         break;
//       }
//     }
//   }

//   return newWord;
// }

// console.log(removeVowels("hola URUGUAY"));
