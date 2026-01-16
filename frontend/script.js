console.log("JS cargado");


const content = document.getElementById("content");
const btnUsers = document.getElementById("getUsers");
const btnBooks = document.getElementById("getBooks");

const BACKEND_URL = "http://localhost:3000";

// Obtener usuarios
btnUsers.addEventListener("click", async () => {
  //content.innerHTML = "Cargando usuarios...";

  const res = await fetch(`${BACKEND_URL}/users`);
  const users = await res.json();
  console.log(users)
  content.innerHTML = users.map(user => `
    <div class="card">
      <h3>👤 ${user.nombre} ${user.apellido}</h3>
      <p>📧 ${user.correo}</p>

      <p><strong>📚 Colección:</strong></p>
      <ul>
        ${user.coleccion.map(book => `<li>${book}</li>`).join("")}
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
console.log(books);
  content.innerHTML = books.map(book => `
    <div class="card">
      <img src="${book.imagen}" alt="${book.titulo}">
      <h3>📖 ${book.titulo}</h3>
      <p>✍️ ${book.autor}</p>
      <p>📅 ${book.fechaPublicacion}</p>
    </div>
  `).join("");
});
