console.log("<=== Rest Operator ===>");

// Passing many arguments
function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 45)); // 60

// Shopping cart with discounts
function cartTotal(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  console.log(`Total price: $${total}`);
  console.log(`Total discount: ${discount * 100}%`);
  return total * (1 - discount);
}

console.log(`Total Cart value: $${cartTotal(0.1, 20, 30, 40, 50)}`);
