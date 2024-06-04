import { addBook } from "./library.js";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("open-modal-btn");
const closeModal = document.getElementById("close-modal-btn");
const form = document.getElementById("book-form");

function clearForm() {
  form.title.value = "";
  form.author.value = "";
  form.pages.value = "";
  form.year.value = "";
  form.read.checked = "";
}

modalBtn.addEventListener("click", () => modal.showModal());

closeModal.addEventListener("click", () => {
  modal.close();
  clearForm();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  clearForm();
  modal.close();
});
