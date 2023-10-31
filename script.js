const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.getElementById("navbar");


hamburger_menu.addEventListener("click", () => {
  navbar.classList.toggle('active')
});


function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Array to store cart items
let cartItems = [];

// Function to display cart items
function displayCart() {
    const cartList = document.querySelector('.cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name + ' - $' + item.price;
        cartList.appendChild(li);
    });

    // Calculate and display the total price
    const cartTotal = document.getElementById('cart-total');
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}

// Sample product data
const products = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 20.49 },
    { name: 'Product 3', price: 15.75 },
];

// Function to add a product to the cart
function addToCart(productIndex) {
    cartItems.push(products[productIndex]);
    displayCart();
}

// Event listeners
document.getElementById('checkout-btn').addEventListener('click', () => {
    // Redirect to the checkout page or perform other checkout actions
    alert('Proceeding to checkout. Total: $' + cartTotal.textContent);
});

// Add product buttons (sample)
products.forEach((product, index) => {
    const btn = document.createElement('button');
    btn.textContent = 'Add to Cart';
    btn.addEventListener('click', () => addToCart(index));
    document.body.appendChild(btn);
});

// Initial display of the cart
displayCart();