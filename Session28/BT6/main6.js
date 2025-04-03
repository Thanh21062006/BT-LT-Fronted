const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

let totalPrice = 0;
for (const index in cart) {
     totalPrice += cart[index].price;
}
console.log(totalPrice);