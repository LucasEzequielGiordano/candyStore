function openCart() {
    const openCart = document.getElementById("imgCart")
    openCart.addEventListener("click", showCart)
}

function showCart() {
    const main = document.querySelector("main")
    const cart = document.createElement("div")
    cart.className = "cart"
    cart.setAttribute = ("id", "cart")
    // cart = ""
    cart.innerHTML = `
    <h3>Cart</h3>
    <div>
        <img src="${sweet.img}" class="card-img-top" alt="">
        <h4 class="card-title text-center">${sweet.name}</h4>
        <p class="card-text text-center" id="stock${sweet.stock}">Stock: ${sweet.stock}</p>
    </div>
    <hr>
    <p class="card-text text-center" id="value${sweet.price}">$${sweet.price}</p><br>
    <button href="#" class="btn btn-success" id="add${sweet.id}">+ Add To Cart</button>
    `
    main.appendChild(cart)
}

// code start
openCart()