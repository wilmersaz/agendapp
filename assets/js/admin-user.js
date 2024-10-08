// Simulación de usuarios con estado activo/inactivo
const users = [
  {
    id: 1,
    nombre: "Shirley Tathyana González",
    identificacion: "52304733",
    password: "52304733",
    telefono: "3002425218",
    correo: "stgonzalez@poligran.edu.co",
    estado: "Activo",
    rol: "usuario",
  },
  {
    id: 2,
    nombre: "Jhon Alejandro Murillo",
    identificacion: "1233693003",
    password: "1233693003",
    telefono: "3103068483",
    correo: "jalemurillo@poligran.edu.co",
    estado: "Activo",
    rol: "usuario",
  },
  {
    id: 3,
    nombre: "Laura Morales",
    identificacion: "1037667455",
    password: "1037667455",
    telefono: "3002375244",
    correo: "ldanmorales@poligran.edu.co",
    estado: "Activo",
    rol: "usuario",
  },
  {
    id: 4,
    nombre: "Diego Ladino",
    identificacion: "1097395030",
    password: "1097395030",
    telefono: "3045440896",
    correo: "daladino@poligran.edu.co",
    estado: "Activo",
    rol: "usuario",
  },
  {
    id: 5,
    nombre: "Wilmer Alonso Sanchez Saez",
    identificacion: "1020751370",
    password: "1020751370",
    telefono: "3006934822",
    correo: "walsanchez@poligran.edu.co",
    estado: "Activo",
    rol: "usuario",
  },
  {
    id: 6,
    nombre: "administrador",
    identificacion: "123456789",
    password: "123456789",
    telefono: "3003333333",
    correo: "admin@poligran.edu.com",
    estado: "Activo",
    rol: "Administrador",
  },
];

// Elementos HTML
const userTableBody = document.querySelector("#user-table tbody");
const filterCheckbox = document.getElementById("filter-active");

// Función para renderizar la tabla de usuarios
function renderUsers() {
  // Limpiar tabla antes de volver a renderizar
  userTableBody.innerHTML = "";

  // Filtrar usuarios en función del checkbox
  const filteredUsers = filterCheckbox.checked
    ? users.filter((user) => user.active)
    : users;

  // Crear filas en la tabla
  filteredUsers.forEach((user) => {
    const row = document.createElement("tr");

    // Nombre del usuario
    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    // Estado del usuario (activo/inactivo)
    const statusCell = document.createElement("td");
    statusCell.textContent = user.active ? "Activo" : "Inactivo";
    statusCell.className = user.active ? "active" : "inactive";
    row.appendChild(statusCell);

    // Agregar fila a la tabla
    userTableBody.appendChild(row);
  });
}

// Escuchar cambios en el checkbox
filterCheckbox.addEventListener("change", renderUsers);

// Renderizar usuarios inicialmente
renderUsers();
