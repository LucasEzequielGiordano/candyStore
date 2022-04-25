let lupa = document.getElementById('lupa')
let search = document.getElementById('search')
let main = document.querySelector('main')
// filtrado de busqueda
lupa.addEventListener("click", (e) => {
  // meto en variable el valor del input
  let searchValue = search.value
  console.log(searchValue)
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
    let sweetsBuscados = sweets.filter(element => element.name == searchValue)
    console.log(sweetsBuscados)
    // pego la card del producto
    sweetsBuscados.forEach(element => {
      stockBusqueda.innerHTML += `
      <div class="card d-flex .justify-content-center" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top" alt=" ">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title text-center">${element.name}</h5>
                <p class="card-text text-center" id="value${element.price}">$${element.price}</p>
                <p class="card-text text-center" id="stock${element.stock}">Stock: ${element.stock}</p>
                <button href="#" class="btn btn-success" id="add${element.id}">+ Add To Cart</button>
            </div>
        </div>
      `
      main.appendChild(stockBusqueda)
    })
  }
})