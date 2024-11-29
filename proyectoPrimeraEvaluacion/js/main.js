let cart = [];

function fetchProducts(category) {
    fetch(`http://localhost:3000/${category}`)
        .then(response => response.json())
        .then(data => displayProducts(data))
        .catch(error => console.error('Error:', error));
}

function displayProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.foto}" alt="${product.titulo}">
            <h3>${product.titulo}</h3>
            <p>${product.descripcion}</p>
            <p>Precio: ${product.precio}€</p>
            <button onclick="addToCart(${JSON.stringify(product)})">Añadir al carrito</button>
        `;
        container.appendChild(productElement);
    });
}

function addToCart(product) {
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.titulo} - ${item.precio}€`;
        cartItems.appendChild(li);
        total += item.precio;
    });
    
    cartTotal.textContent = total.toFixed(2);
    modal.style.display = 'block';
}

document.getElementById('home').addEventListener('click', () => fetchProducts('electronica'));
document.getElementById('electronica').addEventListener('click', () => fetchProducts('electronica'));
document.getElementById('muebles').addEventListener('click', () => fetchProducts('muebles'));
document.getElementById('decoracion').addEventListener('click', () => fetchProducts('decoracion'));
document.getElementById('cart-button').addEventListener('click', showCart);
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Cargar productos de electrónica al inicio
fetchProducts('electronica');
