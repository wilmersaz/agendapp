// Función para leer el archivo sesion.json
function readSessionFile() {
    const isWilmerzas = window.location.href.includes('wilmersaz');

// Asignar las rutas dependiendo del resultado de la verificación
const basePath = isWilmerzas ? '/agendapp/assets/' : '//assets/';

    return fetch(basePath + '/json/sesion.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo sesion.json');
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            if (data.length > 0) {
                return data[0]; // Retornar el primer usuario (ajusta si tienes más usuarios)
            } else {
                throw new Error('El archivo JSON está vacío');
            }
        })
        .catch(error => {
            console.error('Error leyendo el archivo JSON:', error);
            throw error;
        });
}
