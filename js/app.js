// function to create the catalog
function createStringCatalog() {
    let string = "";
    for (const sweet of sweets) {
        string += `
        <div class="card d-flex .justify-content-center" style="width: 18rem;">
            <img src="${sweet.img}" class="card-img-top" alt=" ">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title text-center">${sweet.name}</h5>
                <p class="card-text text-center" id="value${sweet.price}">$${sweet.price}</p>
                <p class="card-text text-center" id="stock${sweet.stock}">Stock: ${sweet.stock}</p>
                <button href="#" class="btn btn-dark" id="add${sweet.id}">Add To Cart</button>
            </div>
        </div>
        `;
    }
    return string;
}

// I scroll through the array "listCart" and print the values from the sweet
function createStringCart(listCart) {
    let string = "";
    for (const sweet of listCart) {
        string += `
        <div class="row row-cols-12">
              <div class="col">${sweet.name}</div>
              <div class="col"><button class="btn btn-danger" id="restar${sweet.id}"> - </button><span>Cantidad: <span id="quantity${sweet.id}">${sweet.quantity}</span></span><button class="btn btn-success" id="aumentar${sweet.id}"> + </button></div>
              <div class="col" id="valueTotal${sweet.price}">$${sweet.price}</div>
              <div class="col"><button class="btn btn-danger" id="eliminar${sweet.id}">ELIMINAR</button></div>
        </div>
        `;
    }
    return string;
}

// Function to display the cards with the "sweets".
function catalogSweets() {
    let stock = document.getElementById("stock");
    let card = document.createElement("div");
    card.innerHTML = createStringCatalog();
    stock.appendChild(card);
    // printDivCart();
}

// realizar funcion de que le pasa a la card si no hay stock (se pone toda gris y bloquear el click)
// function noStock() {} 

// code start
catalogSweets()