export function cargarHeader() {
    const headerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">Mini-Market</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="categoriasDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="categoriasDropdown">
                                <li><a class="dropdown-item" href="electronica.html">Electrónica</a></li>
                                <li><a class="dropdown-item" href="muebles.html">Muebles</a></li>
                                <li><a class="dropdown-item" href="decoracion.html">Decoración</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="cesta.html"><span id="textoCesta">Cesta de la compra</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
} 