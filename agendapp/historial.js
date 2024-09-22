// Array de citas médicas simuladas
const citasMedicas = [
  {
    fecha: "2023-09-10",
    doctor: "Dr. Juan Pérez",
    especialidad: "Cardiología",
    descripcion: "Chequeo general de salud y presión arterial.",
  },
  {
    fecha: "2023-08-15",
    doctor: "Dra. Laura Gómez",
    especialidad: "Dermatología",
    descripcion: "Consulta sobre erupción cutánea en la piel.",
  },
  {
    fecha: "2023-07-20",
    doctor: "Dr. Carlos Rodríguez",
    especialidad: "Oftalmología",
    descripcion: "Examen de la vista y prescripción de lentes.",
  },
];

// Función para renderizar el historial de citas
function renderHistorialCitas() {
  const historialDiv = document.getElementById("historialCitas");

  if (citasMedicas.length === 0) {
    historialDiv.innerHTML = "<p>No hay citas en el historial.</p>";
    return;
  }

  // Generar el HTML para cada cita
  citasMedicas.forEach((cita) => {
    const citaHTML = `
            <div class="cita">
                <h2>${cita.fecha} - ${cita.especialidad}</h2>
                <p><strong>Doctor:</strong> ${cita.doctor}</p>
                <p><strong>Descripción:</strong> ${cita.descripcion}</p>
            </div>
        `;
    historialDiv.innerHTML += citaHTML;
  });
}

// Llamar la función cuando se cargue el documento
document.addEventListener("DOMContentLoaded", renderHistorialCitas);
