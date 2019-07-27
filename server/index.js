const express = require("express");
const app = express();

const {
  receivePublicToken,
  getTransactions
} = require("./controllers/controller");

app.use(express.json()); // this is middleware

const PORT = 4050;

// Get and exchange public token
app.post("/auth/public_token", receivePublicToken);

// Retrieve Transactions for an Item
// https://plaid.com/docs/#transactions
app.get("/transactions", getTransactions);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
