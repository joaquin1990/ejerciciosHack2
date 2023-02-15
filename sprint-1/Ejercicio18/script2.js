function correctParentheses(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      counter++;
    } else if (string[i] === ")") {
      counter--;
    }
  }
  if (counter === 0) {
    return true;
  } else return false;
}
console.log(correctParentheses(")()()()("));
