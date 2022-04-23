// function to create the catalog
const createStringCatalog = () => {
    let string = "";
    for (const sweet of sweets) {
        string += `
        <div class="card d-flex .justify-content-center" style="width: 18rem;">
            <img src="${sweet.img}" class="card-img-top" alt=" ">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title text-center">${sweet.name}</h5>
                <p class="card-text text-center" id="value${sweet.price}">$${sweet.price}</p>
                <p class="card-text text-center" id="stock${sweet.stock}">Stock: ${sweet.stock}</p>
                <button href="#" class="btn btn-success" id="add${sweet.id}">+ Add To Cart</button>
            </div>
        </div>
        `;
    }
    return string;
}

// Function to display the cards with the "sweets".
const catalogSweets = () => {
    let stock = document.getElementById("stock");
    let card = document.createElement("div");
    card.innerHTML = createStringCatalog();
    stock.appendChild(card);
    // addToCart()
    // createFilter()
}

// code start
catalogSweets()