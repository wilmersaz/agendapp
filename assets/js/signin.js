let usuarios = [
    {
        "id": 1,
        "nombre": "Shirley Tathyana González",
        "tipodoc": "CC",
        "identificacion": "52304733",
        "password": "52304733",
        "telefono": "3002425218",
        "correo": "stgonzalez@poligran.edu.co",
        "estado": "Activo",
        "rol": "usuario"
    },
    {
        "id": 2,
        "nombre": "Jhon Alejandro Murillo",
        "tipodoc": "CC",
        "identificacion": "1233693003",
        "password": "1233693003",
        "telefono": "3103068483",
        "correo": "jalemurillo@poligran.edu.co",
        "estado": "Activo",
        "rol": "usuario"
    },
    {
        "id": 3,
        "nombre": "Laura Morales",
        "tipodoc": "CC",
        "identificacion": "1037667455",
        "password": "1037667455",
        "telefono": "3002375244",
        "correo": "ldanmorales@poligran.edu.co",
        "estado": "Inactivo",
        "rol": "usuario"
    },
    {
        "id": 4,
        "nombre": "Diego Ladino",
        "tipodoc": "CC",
        "identificacion": "1097395030",
        "password": "1097395030",
        "telefono": "3045440896",
        "correo": "daladino@poligran.edu.co",
        "estado": "Activo",
        "rol": "usuario"
    },
    {
        "id": 5,
        "nombre": "Wilmer Alonso Sanchez Saez",
        "tipodoc": "CC",
        "identificacion": "1020751370",
        "password": "1020751370",
        "telefono": "3006934822",
        "correo": "walsanchez@poligran.edu.co",
        "estado": "Activo",
        "rol": "usuario"
    },
    {
        "id": 6,
        "nombre": "administrador",
        "tipodoc": "CC",
        "identificacion": "123456789",
        "password": "123456789",
        "telefono": "3003333333",
        "correo": "admin@poligran.edu.com",
        "estado": "Activo",
        "rol": "Administrador"
    }
]


// Función para validar y redirigir
function validarYRedireccionar() {
    const tipodoc = document.getElementById('TipoDoc').value;
    const identificacion = document.getElementById('NumeroDoc').value;
    const password = document.getElementById('Password').value;

    // Realizamos la validación con la lista dinámica de usuarios
    const usuarioValido = validarUsuario(tipodoc, identificacion, password);

    if (usuarioValido) {
        const estado = validarEstado(identificacion)
        if (estado) {
            const usr = usuarios.find(u => u.identificacion === identificacion);
            const sesionActualizada = {
                id: usr.id,
                nombre: usr.nombre,
                identificacion: usr.identificacion,
                telefono: usr.telefono,
                correo: usr.correo,
                estado: usr.estado,
                rol: usr.rol
            };
            // Guardar los datos en sessionStorage
            sessionStorage.setItem('sesion', JSON.stringify(sesionActualizada));

            // Si es válido y usuario esta activo, redirigir a la página de bienvenida
            window.location.href = '../app/welcome.html';
        } else {
            error_notication('El usuario no se encuentra activo');
        }
    } else {
        // Si no es válido, mostrar un mensaje de error
        error_notication('Usuario o contraseña incorrectos');
    }
}

// Función que valida el usuario dinámicamente
function validarUsuario(tipodoc, identificacion, password) {
    // La lista de usuarios es dinámica, podría cambiar en algún punto
    const usuario = usuarios.find(u => u.tipodoc === tipodoc && u.identificacion === identificacion && u.password === password);
    return usuario ? true : false;
}

function validarEstado(identificacion) {
    const usuario = usuarios.find(u => u.identificacion === identificacion);
    return usuario.estado == 'Activo' ? true : false;
}