import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Menu from "./Shared/Menu/Menu";
import DashboardHome from "./Dashboard/DashboardHome/DashboardHome";
import Footer from "./Shared/Footer/Footer";
import Clients from "./Dashboard/Clients/Clients";
import Links from "./Dashboard/Links/Links";
import Settings from "./Dashboard/Settings/Settings";

function AdminHome() {
  let path = useRouteMatch();

  return (
    <div>
      {/* <Menu /> */}
      <DashboardHome />
      {/* <Switch>
        <Route exact path={path}>
          <DashboardHome />
        </Route>
        <Route exact path={`${path}/dashboardHome`}>
          <DashboardHome />
        </Route>
        <Route exact path={`${path}/clients`}>
          <Clients />
        </Route>
        <Route exact path={`${path}/links`}>
          <Links />
        </Route>
        <Route exact path={`${path}/settings`}>
          <Settings />
        </Route>
      </Switch>
      <Footer /> */}
    </div>
  );
}

export default AdminHome;
