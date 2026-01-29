// Available coupons
const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// Validate coupon
export function validateCoupon(couponCode, cartTotal, cartItems) {
    let coupon = coupons[couponCode];
    if (!coupon) return { valid: false, message: 'Invalid coupon' };
    if (cartTotal < coupon.minAmount) return { valid: false, message: `Minimum cart total ${coupon.minAmount} required` };
    if (coupon.category) {
        let hasCategory = cartItems.some(item => item.product.category === coupon.category);
        if (!hasCategory) return { valid: false, message: `Coupon only valid for ${coupon.category} items` };
    }
    return { valid: true, message: 'Coupon applied successfully' };
}

// Calculate discount amount
export function calculateDiscount(couponCode, cartTotal) {
    let coupon = coupons[couponCode];
    if (!coupon) return 0;
    if (coupon.type === 'percentage') return (cartTotal * coupon.value) / 100;
    if (coupon.type === 'flat') return coupon.value;
    return 0;
}

// Apply coupon to cart total
export function applyDiscount(cartTotal, couponCode, cartItems) {
    let validation = validateCoupon(couponCode, cartTotal, cartItems);
    if (!validation.valid) {
        return { originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: validation.message };
    }
    let discount = calculateDiscount(couponCode, cartTotal);
    let finalTotal = cartTotal - discount;
    return { originalTotal: cartTotal, discount, finalTotal, message: 'Coupon applied successfully' };
}
