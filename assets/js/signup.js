function ValidarRegistro() {
    const tipodoc = document.getElementById('TipoDoc').value;
    const identificacion = document.getElementById('NumeroDoc').value;
    const nombres = document.getElementById('Nombres').value;
    const apellidos = document.getElementById('Apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    // Verificar que todos los campos estén llenos
    if (!tipodoc || !identificacion || !nombres || !apellidos || !email || !telefono || !password || !passwordConfirm) {
        warning_notificacion("Todos los campos son obligatorios.");
        return;
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = usuarios.some(usuario =>
        usuario.tipodoc === tipodoc && usuario.identificacion === identificacion
    );

    if (usuarioExistente) {
        error_notication("El usuario ya existe.");
        return;
    }

    if (password !== passwordConfirm) {
        error_notication('Las contraseñas no coinciden.');
        return;
    }

    // Crear el nuevo usuario
    const nuevoUsuario = {
        id: usuarios.length + 1, // Asignar un nuevo ID automáticamente
        nombre: `${nombres} ${apellidos}`,
        tipodoc: tipodoc,
        identificacion: identificacion,
        password: password,
        telefono: telefono,
        correo: email,
        estado: "Activo", // Por defecto, el estado será "Activo"
        rol: "usuario" // Por defecto, el rol será "usuario"
    };

    // Agregar el nuevo usuario al arreglo de usuarios
    usuarios.push(nuevoUsuario);

    // Mostrar la notificación después de 2 segundos
    setTimeout(function () {
        success_notificacion("Usuario creado exitosamente"); // Mostrar la notificación

        // Redirigir a la página de bienvenida después de un segundo
        setTimeout(function () {
            window.location.href = '../app/welcome.html';
        }, 2000); // Tiempo para que el usuario vea la notificación (1 segundo)
    }, 1000); // Esperar 2 segundos antes de mostrar la notificación
}