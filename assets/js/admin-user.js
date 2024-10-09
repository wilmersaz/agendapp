// Elementos HTML
const userTableBody = document.querySelector("#user-table tbody");
const filterCheckbox = document.getElementById("filter-active");

// Función para cargar usuarios desde usuarios.json
async function loadUsers() {
  try {
    const response = await fetch('/assets/json/usuarios.json'); // Cambia la ruta si es necesario
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    const users = await response.json();
    renderUsers(users); // Llama a renderUsers con los usuarios cargados
  } catch (error) {
    console.error('Error:', error);
  }
}

// Función para renderizar la tabla de usuarios
function renderUsers(users) {
  // Limpiar tabla antes de volver a renderizar
  userTableBody.innerHTML = "";

  // Filtrar usuarios en función del checkbox
  const filteredUsers = filterCheckbox.checked
    ? users.filter((user) => user.estado === "Activo")
    : users;

  // Crear filas en la tabla
  filteredUsers.forEach((user) => {
    const row = document.createElement("tr");

    // Nombre del usuario
    const nameCell = document.createElement("td");
    nameCell.textContent = user.nombre;
    row.appendChild(nameCell);

    // Estado del usuario (activo/inactivo)
    const statusCell = document.createElement("td");
    statusCell.textContent = user.estado;
    statusCell.className = user.estado === "Activo" ? "active" : "inactive";
    row.appendChild(statusCell);

    // Agregar fila a la tabla
    userTableBody.appendChild(row);
  });
}

// Escuchar cambios en el checkbox
filterCheckbox.addEventListener("change", () => loadUsers());

// Cargar y renderizar usuarios inicialmente
loadUsers();
