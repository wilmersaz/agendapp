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

// Cargar plantillas con la ruta correcta
loadTemplate(`${basePath}header.html`, 'header');
loadTemplate(`${basePath}sidebar.html`, 'sidebar');
loadTemplate(`${basePath}footer.html`, 'footer');
