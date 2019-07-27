import React, { Component } from "react";

class Transactions extends Component {
  constructor() {
    super();

    this.state = {
      derek: true
    };
  }

  render() {
    return (
      <div>
        <h1>Here are your transactions</h1>
      </div>
    );
  }
}

export default Transactions;
