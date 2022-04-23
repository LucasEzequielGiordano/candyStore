// filtrado de busqueda
lupa.addEventListener("click", (e) => {
    // meto en variable el valor del input
    let searchValue = search.value
    let stockBusqueda = document.createElement("div")
    // recargo  la página si la busqueda es null/unndefined/string vacio
    if (searchValue == null || searchValue == undefined || searchValue == '') {
        window.location.reload()
    } else {
        e.preventDefault()
        // vacio el main  y el input
        main.textContent = ''
        search.value = ''
        // filtro por nombre de acuerdo a la busqueda realizada
        let productosBuscados = productos.filter(element => element.nombre == searchValue)
        console.log(productosBuscados)
        // pego la card del producto
        productosBuscados.forEach(element => {
            stockBusqueda.innerHTML += `
      <div class="card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 cardProductos" id="${element.id}" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">$${element.precio}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
      `
            main.appendChild(stockBusqueda)
        })
    }
})