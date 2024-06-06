import { addBook, changeBtn, retrieveLocalStorage } from "./library.js";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const form = document.getElementById("book-form");

export function clearForm() {
  form.title.value = "";
  form.author.value = "";
  form.pages.value = "";
  form.year.value = "";
  form.read.checked = "";
}

modalBtn.addEventListener("click", () => {
  changeBtn();
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
  clearForm();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (retrieveLocalStorage().length < 100) {
    addBook();
    clearForm();
    modal.close();
  } else {
    alert("Storage is full. Please remove some books before adding more.");
  }
});
