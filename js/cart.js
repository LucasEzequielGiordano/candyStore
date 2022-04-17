// Funcion para imprimir el carrito
function imprimirDivCarrito() {
    let imprimir = document.getElementById("divCarrito");
    imprimir.textContent = "";
    let listaCarrito = document.createElement("div");
    listaCarrito.setAttribute("class", "container-fluid");
    listaCarrito.innerHTML = crearStringCarrito(obtenerDatosStorage());
    imprimir.appendChild(listaCarrito);
    agregarAlCarrito();
    operacionesCarrito();
    eliminarDelCarrito();
    sumarValorFinalCarrito();
    comprarCarrito()
}

// Declaro un evento "Click" para sumar unidades de dulces al carrito
function agregarAlCarrito() {
    for (const dulce of dulces) {
        let agregarAlCarrito = document.getElementById(`agregar${dulce.id}`);
        agregarAlCarrito.addEventListener("click", () => {
            let obtenerDatos = obtenerDatosStorage();
            if (buscarDulceStorage(dulce.id, obtenerDatos)) {
                return true
            } else {
                obtenerDatos.push(dulce);
                modificarDatosStorage(obtenerDatos);
                imprimirDivCarrito();
                sumarValorFinalCarrito();
                Toastify({
                    text: `¡Se agregó "${dulce.nombre}" al carrito!`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right'
                }).showToast();
            }
        });
    }
}

// Declaro las operaciones de cantidad en el carrito
function operacionesCarrito() {
    let listaCarrito = obtenerDatosStorage();
    // Recorro el array  "listaCarrito" y por cada evento "click"
    // Sumo una unidad a la cantidad del dulce en carrito
    for (const dulce of listaCarrito) {
        let aumentar = document.getElementById(`aumentar${dulce.id}`);
        let cantidad = document.getElementById(`cantidad${dulce.id}`);
        let valorTotal = document.getElementById(`valorTotal${dulce.precio}`);
        aumentar.addEventListener("click", () => {
            agregarUnidadDulce(dulce);
            actualizarPrecioTotalDulce(dulce);
            modificarDatosStorage(listaCarrito);
            cantidad.textContent = dulce.cantidad;
            valorTotal.textContent = dulce.precioTotal;
            sumarValorFinalCarrito();
            Toastify({
                text: `¡Se agregó otro "${dulce.nombre}" al carrito!`,
                duration: 3000,
                gravity: 'top',
                position: 'right'
            }).showToast();
        });
    }

    // Recorro el array  "listaCarrito" y por cada evento "click"
    // Resto una unidad a la cantidad del dulce en carrito
    for (const dulce of listaCarrito) {
        let restar = document.getElementById(`restar${dulce.id}`);
        let cantidad = document.getElementById(`cantidad${dulce.id}`);
        let valorTotal = document.getElementById(`valorTotal${dulce.precio}`);
        restar.addEventListener("click", () => {
            if (dulce.cantidad == 1) {
                borrarDulceStorage(dulce.id, listaCarrito);
                imprimirDivCarrito();
            } else {
                quitarUnidadDulce(dulce)
                actualizarPrecioTotalDulce(dulce);
                modificarDatosStorage(listaCarrito);
                cantidad.textContent = dulce.cantidad;
                valorTotal.textContent = dulce.precioTotal;
                sumarValorFinalCarrito();
                Toastify({
                    text: `Se eliminó un "${dulce.nombre}" del carrito`,
                    duration: 3000,
                    gravity: 'top',
                    position: 'right'
                }).showToast();
            }
        });
    }
}

// Elimino del carrito y del storage el dulce seleccionado
function eliminarDelCarrito() {
    let listaCarrito = obtenerDatosStorage()
    for (const dulce of listaCarrito) {
        let eliminarObjetoDeLista = document.getElementById(`eliminar${dulce.id}`);
        eliminarObjetoDeLista.addEventListener("click", () => {
            borrarDulceStorage(dulce.id, listaCarrito);
            sumarValorFinalCarrito();
            imprimirDivCarrito();
            Toastify({
                text: `Se eliminó "${dulce.nombre}" del carrito`,
                duration: 3000,
                gravity: 'top',
                position: 'right'
            }).showToast();
        });
    }
}

function comprarCarrito() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        let imprimir = document.getElementById("divCarrito");
        imprimir.textContent = "";
        let obtenerDatos = obtenerDatosStorage();
        obtenerDatos = [];
        modificarDatosStorage(obtenerDatos);
        emailjs.init('o1BHjOgmyefCbnFo3');
        event.preventDefault();
        emailjs.sendForm('LucasGiordano-CoderHouse', 'template_g6hfbbt', this)
            .then(function () {
                Swal.fire({
                    title: `¡Felicitaciones!`,
                    text: `¡Los productos ya están siendo preparandos, nos comunicaremos a la brevedad!`,
                    icon: 'success',
                    confirmButtonText: '📦'
                }), {
                    durations: {
                        success: 3000
                    }
                }
            }, function (error) {
                Swal.fire({
                    title: `¡OH NO!`,
                    text: `Ocurrió un error con su carrito, intente más tarde`,
                    icon: 'error',
                    confirmButtonText: '📦'
                }), {
                    durations: {
                        alert: 3000
                    }
                }
                console.log('Mail status: failed', error);
            });
    });
}

// Funcion para sumar y restar el valor final del carrito
function sumarValorFinalCarrito() {
    let datosCarrito = obtenerDatosStorage();
    let compraFinal = document.getElementById("spanCompraFinal");
    let precioTotal = 0;
    for (const item of datosCarrito) {
        precioTotal += item.precioTotal;
        compraFinal.textContent = precioTotal;
    }
}