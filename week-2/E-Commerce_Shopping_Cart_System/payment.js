import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Validate payment method
export function validatePaymentMethod(method) {
    return ['card', 'upi', 'cod'].includes(method.toLowerCase());
}

// Generate random order ID
function generateOrderId() {
    return 'ORD' + Date.now();
}

// Process payment
export function processPayment(paymentMethod, couponCode = null) {
    if (!validatePaymentMethod(paymentMethod)) return { status: 'failed', message: 'Invalid payment method' };

    let cartItems = getCartItems();
    if (cartItems.length === 0) return { status: 'failed', message: 'Cart is empty' };

    let subtotal = getCartTotal();
    let discountData = couponCode ? applyDiscount(subtotal, couponCode, cartItems) : { discount: 0, finalTotal: subtotal, message: 'No coupon applied' };

    // Reduce stock for all items
    cartItems.forEach(item => reduceStock(item.product.id, item.quantity));

    // Clear cart
    clearCart();

    // Generate order summary
    return {
        orderId: generateOrderId(),
        items: cartItems,
        subtotal,
        discount: discountData.discount,
        total: discountData.finalTotal,
        paymentMethod,
        status: 'success',
        message: discountData.message
    };
}
