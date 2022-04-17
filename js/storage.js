// receive data stored in storage
// return listing
function getStorageData() {
    return listedCart = JSON.parse(localStorage.getItem("cartInStorage")) || [];
}

// receive the new list to be modified and put in the shopping cart  
function modifyDataStorage(listCart) {
    localStorage.setItem("cartInStorage", JSON.stringify(listCart));
}

// receive the ID of a candy and a list 
// return boolean if it finds that ID in the list 
function searchSweetInStorage(id, listCart) {
    for (const sweet of listCart) {
        if (sweet.id == id) {
            return true;
        }
    }
    return false;
}

// receive the ID of a candy and a list 
// to delete the candy in the list and update storage
function deleteSweetStorage(id, listCart) {
    let indexStorage = listCart.findIndex(element => element.id === id);
    listCart.splice(indexStorage, 1);
    modifyDataStorage(listCart);
}