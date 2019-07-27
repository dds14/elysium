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
      getTransactionsButton: 1
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
    console.log("res.data");
    console.log(res.data);
  }

  handleShowTransactions() {
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
        </div>
      </div>
    );
  }
}

export default Link;
