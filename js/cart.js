function addToCart() {
    for (const sweet of sweets) {
        let addToCart = document.getElementById(`add${sweet.id}`);
        addToCart.addEventListener("click", () => {
            let getData = getStorageData()
            if (searchSweetInStorage(sweet.id, getData)) {
                return true
            } else {
                getData.push(sweet);
                modifyDataStorage(getData);
            }
        })
    }
}