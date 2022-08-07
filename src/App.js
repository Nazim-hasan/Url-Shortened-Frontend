import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminHome from "./Pages/Admin/Dashboard/AdminHome";
import Home from "./Pages/Shared/Home/Home";
import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Register/Register";
import Redirect from "./Redirect/Redirect";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/admin">
            <AdminHome />
          </Route>
          <Route path="/">
            <Redirect />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
