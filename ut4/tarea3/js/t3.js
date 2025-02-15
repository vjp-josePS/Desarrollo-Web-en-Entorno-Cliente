
document.addEventListener('DOMContentLoaded', function() {

    function cargarPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => mostrarPosts(posts))
            .catch(error => console.error('Error al cargar los posts:', error));
    }

    function mostrarPosts(posts) {
        const contenedorEntradas = document.getElementById('contenedorEntradas');
        contenedorEntradas.innerHTML = '';

        posts.forEach(post => {
            const entrada = document.createElement('div');
            entrada.classList.add('entrada');

            const titulo = document.createElement('p');
            titulo.innerHTML = `<strong>TITULO</strong>: ${post.title}`;
            entrada.appendChild(titulo);

            const contenidoDiv = document.createElement('div');
            
            const contenido = document.createElement('p');
            contenido.innerHTML = `<strong>Contenido</strong>: ${post.body}`;
            contenidoDiv.appendChild(contenido);

            // Botón para mostrar usuario
            const btnUsuario = document.createElement('button');
            btnUsuario.classList.add('mostrarUsuario');
            btnUsuario.textContent = 'Usuario del Post';
            btnUsuario.addEventListener('click', function() {
                usuarioDiv.classList.toggle('d-none');
            });
            contenidoDiv.appendChild(btnUsuario);

            // Botón para mostrar comentarios
            const btnComentarios = document.createElement('button');
            btnComentarios.classList.add('mostrarComentarios');
            btnComentarios.textContent = 'Mostrar comentarios';
            btnComentarios.addEventListener('click', function() {
                comentariosDiv.classList.toggle('d-none');
            });
            contenidoDiv.appendChild(btnComentarios);


            const usuarioDiv = document.createElement('div');
            usuarioDiv.classList.add('usuario', 'd-none');
            usuarioDiv.innerHTML = '<p><strong>NOMBRE USUARIO: </strong> Nombre</p>';
            contenidoDiv.appendChild(usuarioDiv);


            const comentariosDiv = document.createElement('div');
            comentariosDiv.classList.add('comentarios', 'd-none');
            comentariosDiv.innerHTML = `
                <p><strong>Comentarios: </strong></p>
                <p>- Comentario1: </p>
                <p>- Comentario 2: </p>
            `;
            contenidoDiv.appendChild(comentariosDiv);

            entrada.appendChild(contenidoDiv);
            contenedorEntradas.appendChild(entrada);
        });
    }
    
    cargarPosts();
});