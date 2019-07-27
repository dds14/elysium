import React from "react";
import { Switch, Route } from "react-router-dom";
import Link from "./components/Link/Link";
import Transactions from "./components/Transactions/Transactions";

export default (
  <Switch>
    {/* <Route path="/profile/:id" component={Profile} /> */}
    <Route path="/transactions" component={Transactions} />
    <Route exact path="/" component={Link} />
  </Switch>
);
