const body = document.querySelector("#body");
const buttonManager = document.querySelector("#modal-manager");
const containerDiv = document.querySelector("#container-div");
const modalContainer = document.querySelector("#my-modal");
const declineButton = document.querySelector("#decline-button");

buttonManager.addEventListener("click", () => {
  modalContainer.classList.remove("modal-display-none");
  modalContainer.classList.add("modal-display-flex");
  containerDiv.classList.add("transparent");
  console.log("Button is working");
});

declineButton.addEventListener("click", () => {
  modalContainer.classList.remove("modal-display-flex");
  modalContainer.classList.add("modal-display-none");
  containerDiv.classList.remove("transparent");
  console.log("Button is working");
});
