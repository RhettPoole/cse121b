// Mock Data
const partsCatalog = [
    { id: 1, name: "RV Awning", price: 200 },
    { id: 2, name: "Solar Panels", price: 300 },
    { id: 3, name: "RV Batteries", price: 150 },
];

// DOM Elements
const catalogDiv = document.getElementById("catalog");
const orderSummaryDiv = document.getElementById("orderSummary");

// Event listener for form submission
catalogDiv.addEventListener("change", updateOrderSummary);

// Render Parts Catalog
function renderCatalog() {
    partsCatalog.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<label>${item.name} - $${item.price}</label><input type="checkbox" value="${item.id}">`;
        catalogDiv.appendChild(itemDiv);
    });
}

// Update Order Summary based on selected items
function updateOrderSummary() {
    const selectedItems = Array.from(catalogDiv.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => parseInt(checkbox.value));
    renderOrderSummary(selectedItems);
}

// Render Order Summary
function renderOrderSummary(selectedItems) {
    // Calculate total price based on selected items
    const totalPrice = selectedItems.reduce((acc, itemId) => {
        const selectedItem = partsCatalog.find(item => item.id === itemId);
        return acc + selectedItem.price;
    }, 0);

    // Display order summary
    orderSummaryDiv.innerHTML = `<h2>Order Summary</h2><p>Total Price: $${totalPrice}</p>`;
}

// Initial rendering
renderCatalog();
