// object declaration
class Sweet {
    constructor(id, name, price, img, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.stock = stock;
        this.quantity = 1;
        this.totalPrice = price;
    }
}

// array declaration
let sweets = []
// Push data arrays
sweets.push(new Sweet(0, "Dos Corazones", 80, "./img/Dos-Corazones.jpg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(1, "Mogul Gomitas", 60, "./img/Mogul-Gomitas.jpg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(2, "Ferrero Rocher", 250, "./img/Ferrero-Rocher.jpg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(3, "Shot Bloque", 160, "./img/Shot-Bloque-Chocolate.webp", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(4, "Kinder", 255, "./img/Kinder-Chocolate.jpeg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(5, "Jorgito Alfajor", 85, "./img/Jorgito-Alfajor.jpg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(6, "Milka", 310, "./img/Milka-Chocolate.png", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(7, "Pepitos Alfajor", 150, "./img/Pepitos-Alfajor.jpg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(8, "Bon o Bon", 55, "./img/Bon-o-Bon.jpg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(9, "Aguila Amargo", 430, "./img/aguilaChocolate.jpg", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(10, "Rocklets", 97, "./img/rocklets.webp", Math.floor(Math.random() * 11)));
sweets.push(new Sweet(11, "Hamlet", 52, "./img/hamlet.webp", Math.floor(Math.random() * 11)));
console.log(sweets)

// method statement
// function to add one unit to the candy quantity
function addSweetUnit(sweet) {
    sweet.quantity = sweet.quantity + 1;
}

// function to remove one unit in the candy quantity
function removeSweetUnit(sweet) {
    sweet.quantity = sweet.quantity - 1;
}

// function to update the total price of the candy
function updateTotalPriceSweet(sweet) {
    sweet.totalPrice = sweet.price * sweet.quantity;
}