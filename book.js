import { removeBook, openEditModal } from "./library.js";
export function Book(title, author, pages, year, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.read = read;
}
export function bookToCard(book, index) {
  const { title, author, pages, year, read } = book;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3 class="card-title">Title: ${title}</h3>
    <p class="card-author">Author: ${author}</p>
    <p class="card-pages">Pages: ${pages}</p>
    <p class="card-year">Year published: ${year}</p>
    <p class="read">${read ? "read" : "not read"}</p>
    `;
  card.appendChild(createEditBtn(index));
  card.appendChild(createDeleteBtn(index));

  return card;
}

const createDeleteBtn = (i) => {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("card-remove-btn");
  removeBtn.setAttribute("data-index", i);
  removeBtn.innerHTML = "Remove";

  removeBtn.addEventListener("click", (e) => {
    let index = e.target.getAttribute("data-index");
    removeBook(index);
  });

  return removeBtn;
};

const createEditBtn = (i) => {
  const editBtn = document.createElement("button");
  editBtn.classList.add("card-edit-btn");
  editBtn.setAttribute("data-index", i);
  editBtn.innerHTML = "Edit";

  editBtn.addEventListener("click", (e) => {
    let index = e.target.getAttribute("data-index");
    openEditModal(index);
    const saveBtn = document.getElementById("save-book-btn");
    saveBtn.setAttribute("data-current-index", index);
  });

  return editBtn;
};
