const content = document.getElementById("content");
const btnUsers = document.getElementById("getUsers");
const btnBooks = document.getElementById("getBooks");

const BACKEND_URL = "http://localhost:3000";

// Obtener usuarios
btnUsers.addEventListener("click", async () => {
  content.innerHTML = "Cargando usuarios...";

  const res = await fetch(`${BACKEND_URL}/users`);
  const users = await res.json();

  content.innerHTML = users.map(user => `
    <div class="card">
      <h3>👤 ${user.name} ${user.surname}</h3>
      <p>📧 ${user.email}</p>

      <p><strong>📚 Colección:</strong></p>
      <ul>
        ${user.books.map(book => `<li>${book}</li>`).join("")}
      </ul>

      <p><strong>⭐ Wishlist:</strong></p>
      <ul>
        ${user.wishlist.map(book => `<li>${book}</li>`).join("")}
      </ul>
    </div>
  `).join("");
});

// Obtener libros
btnBooks.addEventListener("click", async () => {
  content.innerHTML = "Cargando libros...";

  const res = await fetch(`${BACKEND_URL}/books`);
  const books = await res.json();

  content.innerHTML = books.map(book => `
    <div class="card">
      <img src="${book.image}" alt="${book.title}">
      <h3>📖 ${book.title}</h3>
      <p>✍️ ${book.author}</p>
      <p>📅 ${book.year}</p>
    </div>
  `).join("");
});
