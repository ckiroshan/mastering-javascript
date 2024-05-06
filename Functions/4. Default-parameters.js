console.log("<=== Default parameters ===>");

// Simple interest
function interest(principal, rate, years) {
  // Default values
  rate = rate || 3.5;
  years = years || 5;
  console.log(`Loan amount: $${principal}`);
  console.log(`Interest rate: $${rate}`);
  console.log(`Loan repayment: $${years}`);
  return ((principal * rate) / 100) * years;
}

console.log(`Simple interest (5y): $${interest(100_000)}`);

// Simplified simple interest
function interest2(principal, rate = 3.5, years = 5) {
  console.log(`Loan amount: $${principal}`);
  console.log(`Interest rate: $${rate}`);
  console.log(`Loan repayment: $${years}`);
  return ((principal * rate) / 100) * years;
}

console.log(`Simple interest (5y): $${interest(100_000)}`);
