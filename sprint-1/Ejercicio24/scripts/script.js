const header = document.querySelector("#table-header");
const table = document.querySelector("#table-content");
const tBody = document.querySelector("#t-body");
const searchButton = document.querySelector("#search-button");
const filterInput = document.querySelector("#filter-input");
let data;
const arrayWithFilteredData = [];

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  showInTable();
  filterInput.value = "";
});

filterInput.addEventListener("input", (e) => {
  e.preventDefault();
  showInTable();
});

fetch("https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json")
  .then((res) => res.json())
  .then((res) => {
    data = res;
    for (person of data) {
      tBody.innerHTML += `<tr>
        <td>${person.id}</td>
        <td>${person.firstname}</td>
        <td>${person.lastname}</td>
        <td>${person.age}</td>
      </tr>
      `;
    }
  });

function showInTable() {
  tBody.innerHTML = "";
  let intermediateArray = [];
  const inputValue = filterInput.value.toLowerCase();
  if (typeof inputValue === "string") {
    intermediateArray = data.filter((person) => person.firstname.toLowerCase().includes(inputValue));
  }
  if (!isNaN(inputValue)) {
    inputValue.toString();
    intermediateArray = data.filter((person) => person.age.toString().includes(inputValue));
  }
  console.log(intermediateArray);
  for (person of intermediateArray) {
    tBody.innerHTML += `<tr>
          <td>${person.id}</td>
          <td>${person.firstname}</td>
          <td>${person.lastname}</td>
          <td>${person.age}</td>
        </tr>
        `;
  }
}

// What would be nice to do, will be to process the info, so that the í = i, or any word with any special character.
// Also need to do the search for numbers.
