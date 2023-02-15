function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const game = {
  1: "Piedra",
  2: "Papel",
  3: "Tijera",
};

function play(item) {
  let randomNumber = randomIntFromInterval(1, 3);
  let computerItem = game[randomNumber];
  switch (computerItem) {
    case "Piedra": {
      if (item === "Piedra") return `La computadora Eligio Piedra. Empataron`;
      if (item === "Papel") return "La computadora Eligio Piedra. Ganaste ";
      if (item === "Tijera") return `La computradora Eligio Piedra. Perdiste`;
    }
    case "Papel": {
      if (item === "Piedra") return `La computadora Eligio Papel. Perdiste`;
      if (item === "Papel") return "La computadora Eligio Papel. Empataron ";
      if (item === "Tijera") return `La computradora Eligio Papel. Ganaste`;
    }
    case "Tijera": {
      if (item === "Piedra") return `La computadora Eligio Papel. Ganaste`;
      if (item === "Papel") return "La computadora Eligio Papel. Perdiste ";
      if (item === "Tijera") return `La computradora Eligio Papel. Empataron`;
    }
  }
}

console.log(play("Papel"));
