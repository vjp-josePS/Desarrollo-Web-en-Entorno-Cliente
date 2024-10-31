/*
Ahora quiero que partiendo del código de javaScript anterior hagas los siguientes cambios:

Como en la versión 1, pero con los valores realies de usuario y comentarios:

Para consultar el usuario con userId=1 hay que resolver la URL de usuarios y pedir el usuario 1.

Para consultar los comentarios del post con id.1 hay que resolver la URL de comentarios de dicho post. En este caso utilizaremos el atributo "name" para obtener el nombre del comentario, que es lo que mostraremos como comentario en la web.

Código con ayuda para realizar el ejercicio:

function crearPost(post){
    let div = document.createElement"div";
    div.classList.add("entrada");
    div.innerHTML = 
        '<p><strong>TITULO</strong>: ${post.body}</p>
        <div>
            <button class="mostrarUsuario">Usuario del Post</button>
            <button class="mostrarComentarios">Mostrar comentarios</button>
            <div class="usuario d-none">
                <p><strong>NOMBRE USUARIO: </strong><span id="nombreUser">Nombre</span></p>
            </div>
            <div class="comentarios d-none">
                <p><strong>Comentarios: </strong></p>
                <p>Comentario 1: </p>
                <p>Comentario 2: </p>
            </div>
        </div>';
    
    div.querySelector("mostrarUsuario").addEventListener("click", function(){
        let usuarioDiv = div.querySelector(".usuario");
        if(usuarioDiv.className.includes("d-none")){
            cargarUsuario(post.userId.div);
        }else{
            usuarioDiv.classList.toggle("d-none");
        }
    });
}
*/


document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar los posts desde la URL
    function cargarPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => mostrarPosts(posts))
            .catch(error => console.error('Error al cargar los posts:', error));
    }

    // Función para mostrar los posts en la página
    function mostrarPosts(posts) {
        const contenedorEntradas = document.getElementById('contenedorEntradas');
        contenedorEntradas.innerHTML = ''; // Limpiar cualquier contenido previo

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

            // Div para el usuario (por ahora vacío)
            const usuarioDiv = document.createElement('div');
            usuarioDiv.classList.add('usuario', 'd-none');
            usuarioDiv.innerHTML = '<p><strong>NOMBRE USUARIO: </strong> Nombre</p>';
            contenidoDiv.appendChild(usuarioDiv);

            // Div para los comentarios (por ahora vacío)
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

    // Llamar a la función para cargar los posts al cargar la página
    cargarPosts();
});