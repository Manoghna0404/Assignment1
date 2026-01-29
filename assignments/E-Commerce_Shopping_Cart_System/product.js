// Product database (simulated)
const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
    export function getProductById(id) {
    // Find and return product by ID
   let result=products.filter(ele=>ele.id===id)
    return result;
    }
    export function getAllProducts() {
        // Return all products
        return products;
    }
    export function getProductsByCategory(category) {
        // Filter products by category
        let result1=products.filter(ele=>ele.category===category)
        return result1;
    }
    export function searchProducts(query) {
        // Search products by name (case-insensitive)
       let result2=products.find(ele=>ele.name.toLowerCase().includes(query.toLowerCase()));
       return result2;
    }
    export function checkStock(productId, quantity) {
        // Check if product has enough stock
        // Return true/false
        let result3=products.find(ele=>ele.id===productId)
        if(result3)
            return result3.stock>=quantity
        else
            return false;
    }
    export function reduceStock(productId, quantity) {
        // Reduce product stock after purchase
        let result4=products.find(ele=>ele.id===productId)
        if(result4)
            if(result4.stock>=quantity)
             result4.stock-=quantity
        return result4
    }
    console.log(getProductById(2));
    console.log(getAllProducts());
    console.log(getProductsByCategory('electronics'));
    console.log(searchProducts('lap'));
    console.log(checkStock(4, 25));
    console.log(reduceStock(3,15));
                          