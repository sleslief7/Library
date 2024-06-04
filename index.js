import { Book, bookToCard, clearForm } from "./book.js";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("open-modal-btn");
const closeModal = document.getElementById("close-modal-btn");
const form = document.getElementById("book-form");
const cardsContainer = document.getElementById("cards-container");

const library = retrieveLocalStorage();
refreshCards();

const removeBtns = Array.from(document.querySelectorAll(".card-remove-btn"));

function addBookToLibrary() {
  const book = new Book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.year.value,
    form.read.checked
  );
  library.push(book);
  updateLocalStorage();
}

function updateLocalStorage() {
  let library_serialized = JSON.stringify(library);
  localStorage.setItem("library", library_serialized);
}

function retrieveLocalStorage() {
  const serialized = localStorage.getItem("library");
  if (serialized === null) return [];
  return JSON.parse(serialized);
}

modalBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  closeModalFunc();
});

function closeModalFunc() {
  modal.close();
}

function refreshCards() {
  cardsContainer.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    cardsContainer.appendChild(bookToCard(library[i], i));
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  refreshCards();
  clearForm();
  closeModalFunc();
});

function removeBook(index) {
  library = library.splice(index, 1);
  console.log(library);
}

removeBtns.forEach((el) =>
  el.addEventListener("click", (e) => {
    console.log("clicked remove on: " + JSON.stringify(e.target.dataset));
    //let target = e.target;
    //let index = Number(target.getAttribute("data-index"));
    //removeBook(index);
  })
);
