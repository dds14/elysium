import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import axios from "axios";
import "../../App.css";

class Link extends Component {
  constructor() {
    super();

    this.state = {
      derek: true
    };

    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    console.log("button clicked");
    axios.get("/transactions").then(function(res) {
      console.log("transactions");
    });
  }

  render() {
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
        </div>
      </div>
    );
  }
}

export default Link;
