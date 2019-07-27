import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../../App.css";

class Link extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      getTransactionsButton: 1,
      price: null,
      date: null,
      merchant: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleShowTransactions = this.handleShowTransactions.bind(this);
  }

  handleOnSuccess(public_token, metadata) {
    // send token to client server
    // console.log("Link worked on front end, token logged below");
    console.log(public_token);
    axios.post("/auth/public_token", {
      public_token: public_token
    });
  }

  handleOnExit() {
    // handle the case when your user exits Link
    console.log("don't leave!");
  }

  handleClick(res) {
    console.log("button clicked");
    axios.get("/transactions").then(res => {
      this.setState({ transactions: res.data });
    });
  }

  handleShowTransactions() {
    this.setState({
      price: this.state.transactions.transactions.transactions[15].amount,
      date: this.state.transactions.transactions.transactions[15].date,
      merchant: this.state.transactions.transactions.transactions[15].name
    });
    console.log("show transactions");
    console.log(this.state.transactions);
  }

  render() {
    // DEREK - this redirects to a different page after the button is clicked
    // if (this.state.getTransactionsButton === 2) {
    //   return <Redirect to="/transactions" />;
    // }
    return (
      <div>
        <PlaidLink
          clientName="Elysium"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="3e832d013aeb2b5d3fce9f8a9f1c64"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
          className="test"
        >
          Open Link and connect your bank!
        </PlaidLink>
        <div>
          <button onClick={this.handleClick}>Get Transactions</button>
          <button onClick={this.handleShowTransactions}>
            Show me my transactions
          </button>
          <h4>Amount Spent:</h4>
          <h4>{"$" + this.state.price}</h4>
          <h4>Date of purchase:</h4>
          <h4>{this.state.date}</h4>
          <h4>Merchant:</h4>
          <h4>{this.state.merchant}</h4>
        </div>
      </div>
    );
  }
}

export default Link;
