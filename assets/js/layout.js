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

// Cargar plantillas iniciales
loadTemplate('/app/common/header.html', 'header');
loadTemplate('/app/common/sidebar.html', 'sidebar');
loadTemplate('/app/common/footer.html', 'footer');
