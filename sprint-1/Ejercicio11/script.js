function digits() {
  let string = "";
  for (let i = 0; i < 10; i++) {
    string += i;
  }
  console.log(string);
  console.log(typeof string);
  return string;
}
digits();

let array = [];
function digits2() {
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  let result = array.toString();
}
digits2();
