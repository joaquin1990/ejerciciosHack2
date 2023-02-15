// let sentence1 = "Hola Mundo";
// let vowels = "aeiou";

// function countVowels() {
//   for (let i = 0; i < vowels.length; i++) {
//     for (let x = 0; x < sentence1.length; x++) {
//       // Decile si vowels[i] === sentence1[x], entonces sacale esa letra, con el tema de las mayusculas y minusculas, etc:
//       // Para sacar la letra pasa la palabra a un array, usa split para sacarsela y despues con un join("") la volves a un string
//     }
//   }
//   // Faltaria solo ese if, y con el return que iria aca abajo
//   return sentence1;
// }

// countVowels();
// console.log(sentence1);

const array = ["Gabriela", "Joaquin"];
const object = {
  name: "Joaquin",
  surname: "Garese",
};
object.name = "Jose";
// console.log(object.name);
// console.log(typeof object);
// console.log(typeof array);

const newFunction = (nombre) => `Mi nombre es ${nombre}`;
const saludar = (nombre = "Joaquin") => `Mi nombre es ${nombre}`;
console.log(saludar());
console.log(saludar("Maria"));
