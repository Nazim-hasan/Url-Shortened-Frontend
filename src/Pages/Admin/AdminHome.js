import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Menu from "./Shared/Menu/Menu";
import DashboardHome from "./Dashboard/DashboardHome/DashboardHome";
import Footer from "./Shared/Footer/Footer";

function AdminHome() {
  let path = useRouteMatch();

  return (
    <div>
      <Menu />
      <DashboardHome />
      <Switch>
        <Route exact path={path}>
          <DashboardHome />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default AdminHome;
