// VARIABLES:
const button1 = document.querySelector("#button-1");
const aKey = document.querySelector("#a-key");
const imgTom1 = document.querySelector("#img-tom1");

const button2 = document.querySelector("#button-2");
const skey = document.querySelector("#s-key");
const imgTom2 = document.querySelector("#img-tom2");

const button3 = document.querySelector("#button-3");
const dkey = document.querySelector("#d-key");
const imgTom3 = document.querySelector("#img-tom3");

const button4 = document.querySelector("#button-4");
const fkey = document.querySelector("#f-key");
const imgTom4 = document.querySelector("#img-tom4");

const button5 = document.querySelector("#button-5");
const jKey = document.querySelector("#j-key");
const imgSnare = document.querySelector("#img-snare");

const button6 = document.querySelector("#button-6");
const kKey = document.querySelector("#k-key");
const imgCrash = document.querySelector("#img-crash");

const button7 = document.querySelector("#button-7");
const lKey = document.querySelector("#l-key");
const imgKick = document.querySelector("#img-kick");

// FUNCTION TO PLAY MUSIC:
function playMusic(file) {
  let audio = new Audio(file);
  audio.play();
}

// EVENT LISTENER 1:
button1.addEventListener("click", () => {
  console.log("Click Button 1 worked");
  //   button1.innerHTML += `<audio id="tom-1a" src="./sounds/tom-1.mp3" autoplay></audio>`;
  playMusic("sounds/tom-1.mp3");
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 65) {
    console.log("Function is working");
    // aKey.innerHTML += `<audio id="tom-1b" src="./sounds/tom-1.mp3" autoplay></audio>`;
    playMusic("sounds/tom-1.mp3");
  }
});

imgTom1.addEventListener("click", () => {
  console.log("Click On Image 1 Working");
  playMusic("sounds/tom-1.mp3");
});
// ------------------------------------------------------------------------------------

// EVENT LISTENER 2
button2.addEventListener("click", () => {
  console.log("Click Button 2 working");
  //   button2.innerHTML += `<audio id="tom-2a" src="./sounds/tom-2.mp3" autoplay></audio>`;
  playMusic("sounds/tom-2.mp3");
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 83) {
    console.log("Function is working");
    // skey.innerHTML += `<audio id="tom-2b" src="./sounds/tom-2.mp3" autoplay></audio>`;
    playMusic("sounds/tom-2.mp3");
  }
});

imgTom2.addEventListener("click", () => {
  console.log("Click On Image 2 Working");
  playMusic("sounds/tom-2.mp3");
  //   imgTom2.innerHTML += `<audio id="tom-2c" src="./sounds/tom-2.mp3" autoplay></audio>`;
});
// ------------------------------------------------------------------------------------

// EVENT LISTENER 3
button3.addEventListener("click", () => {
  console.log("Click Button 3 working");
  //   button3.innerHTML += `<audio id="tom-3a" src="./sounds/tom-3.mp3" autoplay></audio>`;
  playMusic("sounds/tom-3.mp3");
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 68) {
    console.log("Function is working");
    // dkey.innerHTML += `<audio id="tom-3b" src="./sounds/tom-3.mp3" autoplay></audio>`;
    playMusic("sounds/tom-3.mp3");
  }
});

imgTom3.addEventListener("click", () => {
  console.log("Click On Image 3 Working");
  imgTom3.innerHTML += `<audio id="tom-3c" src="./sounds/tom-3.mp3" autoplay></audio>`;
});
// ------------------------------------------------------------------------------------

// EVENT LISTENER 4
button4.addEventListener("click", () => {
  console.log("Click Button 4 working");
  //   button4.innerHTML += `<audio id="tom-4a" src="./sounds/tom-4.mp3" autoplay></audio>`;
  playMusic("sounds/tom-4.mp3");
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 70) {
    console.log("Function is working");
    // fkey.innerHTML += `<audio id="tom-4b" src="./sounds/tom-4.mp3" autoplay></audio>`;
    playMusic("sounds/tom-4.mp3");
  }
});

imgTom4.addEventListener("click", () => {
  console.log("Click On Image 4 Working");
  //   imgTom4.innerHTML += `<audio id="tom-4c" src="./sounds/tom-4.mp3" autoplay></audio>`;
  playMusic("sounds/tom-4.mp3");
});
// ------------------------------------------------------------------------------------

// EVENT LISTENER SNARE
button5.addEventListener("click", () => {
  console.log("Click Button 5 working");
  //   button5.innerHTML += `<audio id="snareA" src="./sounds/snare.mp3" autoplay></audio>`;
  playMusic("sounds/snare.mp3");
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 74) {
    console.log("Function is working");
    // jKey.innerHTML += `<audio id="snareA" src="./sounds/snare.mp3" autoplay></audio>`;
    playMusic("sounds/snare.mp3");
  }
});

imgSnare.addEventListener("click", () => {
  console.log("Click On Image Snare Working");
  //   imgSnare.innerHTML += `<audio id="snareB" src="./sounds/snare.mp3" autoplay></audio>`;
  playMusic("sounds/snare.mp3");
});

// EVENT LISTENER CRASH
button6.addEventListener("click", () => {
  console.log("Click Button 6 working");
  button6.innerHTML += `<audio id="crashC" src="./sounds/crash.mp3" autoplay></audio>`;
  playMusic("sounds/crash.mp3");
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 75) {
    console.log("Function is working");
    // kKey.innerHTML += `<audio id="crashB" src="./sounds/crash.mp3" autoplay></audio>`;
    playMusic("sounds/crash.mp3");
  }
});

imgCrash.addEventListener("click", () => {
  console.log("Click On Image Snare Working");
  //   imgCrash.innerHTML += `<audio id="crashC" src="./sounds/crash.mp3" autoplay></audio>`;
  playMusic("sounds/crash.mp3");
});

// EVENT LISTENER KICK
button7.addEventListener("click", () => {
  console.log("Click Button 7 working");
  //   button7.innerHTML += `<audio id="kickA" src="./sounds/kick.mp3" autoplay></audio>`;
  playMusic("sounds/kick-bass.mp3");
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 76) {
    console.log("Function is working");
    // kKey.innerHTML += `<audio id="crashB" src="./sounds/crash.mp3" autoplay></audio>`;
    playMusic("sounds/kick-bass.mp3");
  }
});

imgKick.addEventListener("click", () => {
  console.log("Click On Image Snare Working");
  //   imgCrash.innerHTML += `<audio id="crashC" src="./sounds/crash.mp3" autoplay></audio>`;
  playMusic("sounds/kick-bass.mp3");
});

// CODE TO TEST WICH IS THE CODE OF THE LETTER PRESSED
// document.addEventListener("keyup", (event) => {
//   console.log(event.keyCode);
// });
