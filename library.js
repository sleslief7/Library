import { Book, bookToCard } from "./book.js";

export const library = retrieveLocalStorage();
refreshCards();

export function addBook() {
  const form = document.getElementById("book-form");
  const book = new Book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.year.value,
    form.read.checked
  );
  library.push(book);
  updateLocalStorage();
  refreshCards();
}

export function removeBook(index) {
  library.splice(index, 1);
  updateLocalStorage();
  refreshCards();
}

function refreshCards() {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    cardsContainer.appendChild(bookToCard(library[i], i));
  }
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
