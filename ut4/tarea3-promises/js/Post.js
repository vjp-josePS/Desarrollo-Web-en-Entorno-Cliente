// Post.js
class Post {
    constructor(objPost) {
        this.id = objPost.id;
        // this.userId = objPost.userId;
        this.title = objPost.title;
        this.body = objPost.body;
    }

    // Generar el HTML del post

    toDiv() {
        const div = document.createElement('div');
        div.classList.add('entrada');
        div.innerHTML = `
            <p><strong>TITULO</strong>: ${this.title}</p>
            <div>
                <p><strong>Contenido</strong>: ${this.body}</p>
                <button class="mostrarUsuario">Usuario del Post</button>
                <button class="mostrarComentarios">Mostrar comentarios</button>
                <div class="usuario d-none">
                    <p><strong>NOMBRE USUARIO: </strong> <span class="usuario-nombre"></span></p>
                </div>
                <div class="comentarios d-none">
                    <p><strong>Comentarios: </strong></p>
                    <div class="comentarios-lista"></div>
                </div>
            </div>
        `;
        return div;
    }

    // Cargar el nombre del usuario

    async loadUser () {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`);

        // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`);

        // Si la linea anterior me muestra siempre el mismo nombre.

        const user = await response.json();
        return user.name;
    }

    // Cargar los comentarios

    async loadComments() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`);
        const comments = await response.json();
        return comments;
    }
}

export default Post;