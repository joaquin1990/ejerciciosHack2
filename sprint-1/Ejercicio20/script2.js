function play(playString) {
  let playArray = ["piedra", "papel", "tijera"];
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);
  let respuesta = "";

  if (playString === "piedra" && computerChoice === 0) {
    respuesta = "La computadora eligio pierda. Empate";
  }
  if (playString === "piedra" && computerChoice === 1) {
    respuesta = "La computadora eligio papel. Pedriste";
  }
  if (playString === "piedra" && computerChoice === 2) {
    respuesta = "La computadora eligio tijera. Perdiste";
  }
  if (playString === "papel" && computerChoice === 0) {
    respuesta = "La computadora eligio piedra. Ganaste";
  }
  if (playString === "papel" && computerChoice === 1) {
    respuesta = "La computadora eligio papel. Empate";
  }
  if (playString === "papel" && computerChoice === 2) {
    respuesta = "La computadora eligio tijera. Perdiste";
  }
  if (playString === "tijera" && computerChoice === 0) {
    respuesta = "La computadora eligio piedra. Perdiste";
  }
  if (playString === "tijera" && computerChoice === 1) {
    respuesta = "La computadora eligio papel. Ganaste";
  }
  if (playString === "tijera" && computerChoice === 2) {
    respuesta = "La computadora eligio tijera. Empate";
  }

  return respuesta;
}

console.log(play("tijera"));
