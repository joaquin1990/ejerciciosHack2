const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function transformation(input1) {
  if (!isNaN(input1)) {
    return input1;
  }
  return input1.toLowerCase();
}

function encrypt13(input2) {
  if (!isNaN(input2)) return input2;
  let result = "";
  let newCharacter;
  for (let i = 0; i < input2.length; i++) {
    if (alfabet.find((letter) => letter === input2[i]) === undefined) {
      newCharacter = input2[i];
    } else newCharacter = transformation(input2[i]);
    result += newCharacter;
  }
  return result.toLowerCase();
}

console.log(encrypt13("Maria"));

// Need to do Special chacarters like tildes work.
// Need to pass everything to lowercase
