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
    <button class="card-edit-btn" >Edit</button>`;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("card-remove-btn");
  removeBtn.setAttribute("data-index", index);
  removeBtn.innerHTML = "Remove";

  card.appendChild(removeBtn);

  return card;
}
export function clearForm() {
  const form = document.getElementById("book-form");
  form.title.value = "";
  form.author.value = "";
  form.pages.value = "";
  form.year.value = "";
  form.read.checked = "";
}
