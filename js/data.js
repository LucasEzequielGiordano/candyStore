// object declaration
class Sweet {
    constructor(id, name, price, img, stock) {
        this.id = id
        this.name = name
        this.price = price
        this.img = img
        this.stock = stock
        this.quantity = 1
        this.totalPrice = price
    }
}

// array declaration
let sweets = []
// Push data arrays
sweets.push(new Sweet(0, "Dos Corazones", randomPrice(85, 105), "./img/Dos-Corazones.jpg", randomStock()))
sweets.push(new Sweet(1, "Mogul Gomitas", randomPrice(60, 80), "./img/Mogul-Gomitas.jpg", randomStock()))
sweets.push(new Sweet(2, "Ferrero Rocher", randomPrice(250, 270), "./img/Ferrero-Rocher.jpg", randomStock()))
sweets.push(new Sweet(3, "Shot Bloque", randomPrice(160, 180), "./img/Shot-Bloque-Chocolate.webp", randomStock()))
sweets.push(new Sweet(4, "Kinder", randomPrice(255, 275), "./img/Kinder-Chocolate.jpeg", randomStock()))
sweets.push(new Sweet(5, "Jorgito Alfajor", randomPrice(85, 105), "./img/Jorgito-Alfajor.jpg", randomStock()))
sweets.push(new Sweet(6, "Milka", randomPrice(310, 330), "./img/Milka-Chocolate.png", randomStock()))
sweets.push(new Sweet(7, "Pepitos Alfajor", randomPrice(150, 170), "./img/Pepitos-Alfajor.jpg", randomStock()))
sweets.push(new Sweet(8, "Bon o Bon", randomPrice(55, 75), "./img/Bon-o-Bon.jpg", randomStock()))
sweets.push(new Sweet(9, "Aguila Amargo", randomPrice(430, 450), "./img/aguilaChocolate.jpg", randomStock()))
sweets.push(new Sweet(10, "Rocklets", randomPrice(97, 117), "./img/rocklets.webp", randomStock()))
sweets.push(new Sweet(11, "Hamlet", randomPrice(52, 72), "./img/hamlet.webp", randomStock()))
console.log(sweets)

// method statement
// function to add one unit to the candy quantity
const addSweetUnit = (sweet) => {
    sweet.quantity = sweet.quantity + 1
}

// function to remove one unit in the candy quantity
const removeSweetUnit = (sweet) => {
    sweet.quantity = sweet.quantity - 1
}

// function to update the total price of the candy
const updateTotalPriceSweet = (sweet) => {
    sweet.totalPrice = sweet.price * sweet.quantity
}

// function to calculate a random value in the price in a range of 20 numbers between min and max
function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

// function to calculate a random value in the stock
function randomStock() {
    return Math.floor(Math.random() * 11)
}