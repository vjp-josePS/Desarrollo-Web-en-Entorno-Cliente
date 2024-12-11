// Función para buscar un usuario
function buscarUsuario() {
    const nombre = document.getElementById('nombreInput').value;
    
    if (!nombre) {
        alert('Por favor, introduce un nombre');
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (usuarios[nombre]) {
        alert(`${nombre} tiene ${usuarios[nombre]} años`);
    } else {
        document.getElementById('edadInput').classList.remove('hidden');
    }
}

// Función para guardar un usuario
function guardarUsuario() {
    const nombre = document.getElementById('nombreInput').value;
    const edad = document.getElementById('edadNumero').value;
    
    if (!nombre || !edad) {
        alert('Por favor, introduce nombre y edad');
        return;
    }

    if (edad < 0 || edad > 120) {
        alert('Por favor, introduce una edad válida');
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
    usuarios[nombre] = edad;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    alert('Usuario guardado correctamente');
    document.getElementById('edadInput').classList.add('hidden');
    document.getElementById('nombreInput').value = '';
    document.getElementById('edadNumero').value = '';
}

// Función para consultar todos los usuarios
function consultarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
    const listaDiv = document.getElementById('listaUsuarios');
    listaDiv.innerHTML = '';

    if (Object.keys(usuarios).length === 0) {
        listaDiv.innerHTML = '<p>No hay usuarios registrados</p>';
        return;
    }

    const lista = document.createElement('ul');
    for (const [nombre, edad] of Object.entries(usuarios)) {
        const item = document.createElement('li');
        item.textContent = `${nombre}: ${edad} años`;
        lista.appendChild(item);
    }
    
    listaDiv.appendChild(lista);
}