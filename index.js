const form = document.getElementById("inputForm");
const tableBody = document.querySelector("#websitesTable tbody");
let index = 0;


form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const websiteInput = document.getElementById("websiteInput");
  const name = nameInput.value;
  const website = websiteInput.value;

  if (name.length < 3) {
    alert("Name should have at least 3 characters.");
    return;
  }

  if (!validateWebsite(website)) {
    alert("Invalid website URL.");
    return;
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${++index}</td>
    <td>${name}</td>
    <td>
      <button onclick="visitWebsite('${website}')" class="btn-visit">
        <i class="fa-solid fa-eye"></i>
        Visit
      </button>
    </td>
    <td>
      <button onclick="deleteRow(this)" class="btn-delete">
        <i class="fa-solid fa-trash"></i>
        Delete
      </button>
    </td>

  `;
  tableBody.appendChild(newRow);

  nameInput.value = "";
  websiteInput.value = "";
});

function validateWebsite(website) {
  const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return urlPattern.test(website);
}

function visitWebsite(website) {
  window.open(website, "_blank");
}

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
}
