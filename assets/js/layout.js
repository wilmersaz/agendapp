function loadTemplate(url, elementId) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                resolve(); // Resolvemos la promesa aquí
            })
            .catch(error => {
                console.error('Error loading template con id: ', elementId, ' | ', error);
                reject(error); // Rechazamos la promesa en caso de error
            });
    });
}

// Verificar si la URL contiene 'wilmerzas'
const isWilmerzas = window.location.href.includes('wilmersaz');

// Asignar las rutas dependiendo del resultado de la verificación
const basePath = isWilmerzas ? '/agendapp/app/common/' : '/app/common/';

// Función principal para cargar las plantillas según el rol
function loadPage() {
    // Leer el archivo sesion.json para obtener los datos del usuario
    readSessionFile().then(user => {
        // Cargar las plantillas comunes (header y footer)
        loadTemplate(`${basePath}header.html`, 'header');
        loadTemplate(`${basePath}footer.html`, 'footer');

        // Verificar el rol del usuario
        if (user.rol === 'Administrador') {
            // Cargar sidebarAdmin si es Administrador
            loadTemplate(`${basePath}sidebarAdmin.html`, 'sidebar');
        } else {
            // Cargar sidebar normal si no es Administrador
            loadTemplate(`${basePath}sidebar.html`, 'sidebar');
        }
    }).catch(error => {
        console.error('Error al cargar la página:', error);
    });
}

// Llamar a la función principal para cargar la página
loadPage();
