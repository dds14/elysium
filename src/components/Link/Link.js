import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import axios from "axios";
import "../../App.css";

class Link extends Component {
  handleOnSuccess(token, metadata) {
    // send token to client server
    console.log("link hit on front end, token logged below");
    console.log(token);
    axios.get("/").then(res => {
      console.log("GET");
    });
    axios
      .post("/auth/public_token", {
        token: token
      })
      .then(res => {
        console.log("POST");
      });
  }

  handleOnExit() {
    // handle the case when your user exits Link
  }
  render() {
    return (
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
    );
  }
}
export default Link;
