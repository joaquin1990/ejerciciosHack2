const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlfabet = [];
for (let i = 0; i < alfabet.length; i++) {
  upperCaseAlfabet.push(alfabet[i].toUpperCase());
}

function transformation(l) {
  let newLetter = "";
  if (!isNaN(l)) {
    return l;
  }
  let isInLowerCase = alfabet.findIndex((letter) => letter === l);
  let isInUpperCase = upperCaseAlfabet.findIndex((letter) => letter === l);
  if (isInLowerCase === -1 && isInUpperCase === -1) {
    return l;
  }
  if (isInLowerCase === -1) {
    const letterIndex = upperCaseAlfabet.findIndex((letter) => letter === l);
    if (letterIndex >= 13) {
      newLetter = upperCaseAlfabet[letterIndex + 13 - 26];
      return newLetter;
    } else {
      newLetter = upperCaseAlfabet[letterIndex + 13];
      return newLetter;
    }
  }
  if (isInUpperCase === -1) {
    const letterIndex = alfabet.findIndex((letter) => letter === l);
    if (letterIndex >= 13) {
      newLetter = alfabet[letterIndex + 13 - 26];
      return newLetter;
    } else {
      newLetter = alfabet[letterIndex + 13];
      return newLetter;
    }
  }
  return l;
}

function encrypt13(word) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let newCharacter = transformation(word[i]);
    result += newCharacter;
  }
  return result;
}

console.log(encrypt13("hola a"));

// console.log(transformation("í"));
