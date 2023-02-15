let array1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
let array2 = [8];

function findOddNumber(array) {
  let sortedArray = array.sort();
  let oddNumber = 0;
  let counter = 1;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      counter++;
      continue;
    } else {
      if (counter % 2 !== 0) {
        console.log(`Entro el ${sortedArray[i]}`);
        oddNumber = sortedArray[i];
        console.log(array);
        return oddNumber;
      } else {
        counter = 1;
      }
    }
  }
}

console.log(findOddNumber(array1));
