var plaid = require("plaid");
var moment = require("moment");

var PLAID_CLIENT_ID = "5d2a9d234fa1190016b496cc";
var PLAID_SECRET = "87b88013af4dd20bb29b8b85b4ed74";
var PLAID_PUBLIC_KEY = "3e832d013aeb2b5d3fce9f8a9f1c64";
var PLAID_ENV = "sandbox";

// PLAID_PRODUCTS is a comma-separated list of products to use when initializing
// Link. Note that this list must contain 'assets' in order for the app to be
// able to create and retrieve asset reports.
// var PLAID_PRODUCTS = envvar.string("PLAID_PRODUCTS", "transactions");

// Defining the variables to be used later
var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

// Initialize the Plaid client
var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV],
  { version: "2019-05-29", clientApp: "Plaid Quickstart" }
);

const receivePublicToken = (req, res) => {
  // First, receive the public token and set it to a variable
  console.log("before public token");
  console.log(req.body.public_token);
  console.log("after public token");
  let PUBLIC_TOKEN = req.body.public_token;
  // Second, exchange the public token for an access token
  client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    res.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID
    });
    console.log("access token below");
    console.log(ACCESS_TOKEN);
  });
};

const getTransactions = (req, res) => {
  console.log("starting to get transactions");
  // Pull transactions for the Item for the last 30 days
  let startDate = moment()
    .subtract(30, "days")
    .format("YYYY-MM-DD");
  let endDate = moment().format("YYYY-MM-DD");
  console.log("made it past variables");
  client.getTransactions(
    ACCESS_TOKEN,
    startDate,
    endDate,
    {
      count: 250,
      offset: 0
    },
    function(error, transactionsResponse) {
      // prettyPrintResponse(transactionsResponse);
      res.json({ transactions: transactionsResponse });
      console.log("WOHA!!!");
      console.log(transactionsResponse);
    }
  );
};

module.exports = {
  receivePublicToken,
  getTransactions
};
