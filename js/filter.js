//  function to create the filter options in the dom
function createFilter() {
    const containerFilter = document.createElement("div")
    containerFilter.className = "containerFilter"
    containerFilter.setAttribute = ("id", "containerFilter")
    const main = document.querySelector("main")
    containerFilter.innerHTML = `
        <div class="title">
            <h2>Filter</h2>
        </div>
        <div class="filterPrice">
            <h3>Price:</h3>
            <ul>
                <li><input type="checkbox" id="checkPrice100">$-100</li>
                <li><input type="checkbox" id="checkPrice250">$-250</li>
                <li><input type="checkbox" id="checkPrice400">$-400</li>
            </ul>
            <button class="btn btn-success">Filter</button>
        </div>
        <div class="filterStock">
            <h3>Stock</h3>
            <ul>
                <li><input type="checkbox" id="checkStock">Stock</li>
                <li><input type="checkbox" id="checkNoStock">No Stock</li>
            </ul>
            <button class="btn btn-success">Filter</button>
        </div>
        `
    main.appendChild(containerFilter)
}