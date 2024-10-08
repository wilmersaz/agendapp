const sesion = JSON.parse(sessionStorage.getItem('sesion'));

if (sesion) {
  // Asignar valores a los campos del formulario
  document.getElementById('identificacion').value = sesion.identificacion;
  document.getElementById('nombre').value = sesion.nombre.split(' ')[0]; // Primer nombre
  document.getElementById('apellidos').value = sesion.nombre.split(' ').slice(1).join(' '); // Apellidos
  document.getElementById('correo').value = sesion.correo;
  document.getElementById('telefono').value = sesion.telefono;

  // Asignar el nombre completo al encabezado de la imagen de perfil
  // document.getElementById('nombreCompleto').textContent = sesion.nombre;
}