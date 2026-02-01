import { getProductById, checkStock } from './product.js';

// Shopping cart items
let cartItems = [];

// Add product to cart
export function addToCart(productId, quantity) {
    let product = getProductById(productId);
    if (!product) return 'Product not found';
    if (!checkStock(productId, quantity)) return 'Not enough stock';

    let existing = cartItems.find(item => item.product.id === productId);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cartItems.push({ product, quantity });
    }
    return 'Added to cart successfully';
}

// Remove product from cart
export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.product.id !== productId);
    return 'Item removed from cart';
}

// Update quantity of product in cart
export function updateQuantity(productId, newQuantity) {
    let item = cartItems.find(item => item.product.id === productId);
    if (!item) return 'Item not in cart';
    if (!checkStock(productId, newQuantity)) return 'Not enough stock';
    item.quantity = newQuantity;
    return 'Quantity updated successfully';
}

// Get all cart items
export function getCartItems() {
    return cartItems;
}

// Get total price of cart
export function getCartTotal() {
    let total = 0;
    cartItems.forEach(item => {
        total += item.product.price * item.quantity;
    });
    return total;
}

// Clear the cart
export function clearCart() {
    cartItems = [];
    return 'Cart cleared';
}
