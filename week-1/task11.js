const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() all credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log("Credit Transactions:", creditTransactions);

// 2. map() to extract only transaction amounts
const amounts = transactions.map(t => t.amount);
console.log("Transaction Amounts:", amounts);

// 3. reduce() to calculate final account balance
const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit"
    ? balance + t.amount
    : balance - t.amount;
}, 0);
console.log("Final Account Balance:", finalBalance);

// 4. find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log("First Debit Transaction:", firstDebit);

// 5. findIndex() of transaction with amount 10000
const indexOf10000 = transactions.findIndex(t => t.amount === 10000);
console.log("Index of transaction with amount 10000:", indexOf10000);
