const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
        };
//Create a deep copy of order
orderCopy=structuredClone(order);
/*2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
orderCopy.customer.address.city="Hyd";
orderCopy.items[0].price=50000;
console.log(order)
console.log(orderCopy);
