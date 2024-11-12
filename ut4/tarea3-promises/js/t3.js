import Post from './Post.js'; 

'use strict';

let contenedor = document.getElementById("contenedorEntradas");

// Función para cargar los posts

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())

    .then(objJSON => {
        let posts = [];
        for (let postObj of objJSON) {
            posts.push(new Post(postObj));
        }
        return posts;
    })

    .then(posts => {
        posts.forEach(post => {
            const postDiv = post.toDiv();
            contenedor.appendChild(postDiv);

            //Mostrar el usuario con Listener
            
            postDiv.querySelector('.mostrarUsuario').addEventListener('click', async () => {
                const userName = await post.loadUser ();
                postDiv.querySelector('.usuario-nombre').textContent = userName;
                postDiv.querySelector('.usuario').classList.toggle('d-none');
            });

            //Mostrar comentarios con Listener

            postDiv.querySelector('.mostrarComentarios').addEventListener('click', async () => {
                const comments = await post.loadComments();
                const commentsList = postDiv.querySelector('.comentarios-lista');

                commentsList.innerHTML = ''; 

                comments.forEach(comment => {
                    const commentItem = document.createElement('p');
                    commentItem.textContent = `- ${comment.body}`;
                    commentsList.appendChild(commentItem);
                });

                postDiv.querySelector('.comentarios').classList.toggle('d-none');
            });
        });
    })
    .catch(error => console.log(error.message));