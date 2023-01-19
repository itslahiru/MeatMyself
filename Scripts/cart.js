var addToCartBtn = document.getElementById("addToCart");
var removeFromCartBtn = document.getElementById("removeFromCart");
var quantity = document.getElementById("quantity");

// get the stored quantity from local storage
if (localStorage.getItem("quantity")) {
    quantity.innerHTML = "Quantity: " + localStorage.getItem("quantity");
}

addToCartBtn.addEventListener("click", decreaseQuantity);
removeFromCartBtn.addEventListener("click", increaseQuantity);

function decreaseQuantity() {
  var currentQuantity = parseInt(quantity.innerHTML.split(" ")[1]);
    if (currentQuantity > 0) {
        currentQuantity--;
        quantity.innerHTML = "Quantity: " + currentQuantity;
        localStorage.setItem("quantity", currentQuantity);
    }
}

function increaseQuantity() {
  var currentQuantity = parseInt(quantity.innerHTML.split(" ")[1]);
    currentQuantity++;
    quantity.innerHTML = "Quantity: " + currentQuantity;
    localStorage.setItem("quantity", currentQuantity);
}