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
    <h3 class="card-title">${title}</h3>
    <p class="card-author"><strong>Author:</strong> ${author}</p>
    <p class="card-year"><strong>Published:</strong> ${year}</p>
    <div class="card-inner-container">
      <p class="card-pages">${pages} pages</p>
      <p class="${read ? "read" : "not-read"}">${read ? "Read" : "Not Read"}</p>
    </div>
    `;
  card.appendChild(createEditBtn(index));
  card.appendChild(createDeleteBtn(index));

  return card;
}

const createDeleteBtn = (i) => {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("card-remove-btn");
  removeBtn.setAttribute("data-index", i);
  removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  removeBtn.addEventListener("click", (e) => {
    let index = Number(e.currentTarget.getAttribute("data-index"));
    removeBook(index);
  });

  return removeBtn;
};

const createEditBtn = (i) => {
  const editBtn = document.createElement("button");
  editBtn.classList.add("card-edit-btn");
  editBtn.setAttribute("data-index", i);
  editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

  editBtn.addEventListener("click", (e) => {
    let index = Number(e.currentTarget.getAttribute("data-index"));
    openEditModal(index);
    const saveBtn = document.getElementById("save-book-btn");
    saveBtn.setAttribute("data-index", index);
  });

  return editBtn;
};
