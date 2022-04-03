import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/client/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import SendMoney from "../pages/client/SendMoney";

import { useSelector } from "react-redux";
import TransectionsLog from "../pages/client/TransectionsLog";
import PassBook from "../pages/client/PassBook";
import ShowDetail from "../pages/client/ShowDetail";

const Routes = () => {
  const isLogged = useSelector(state=>state.user.isLogged)
  return (
    <Switch>
      {/* -----------------Home--------------------- */}
      <Route path="/" exact component={Home} />
      {/* ---------------Auth--------------------- */}
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      {/* ---------------Send Money---------------- */}
      <Route path="/chuyen-tien" component={isLogged ? SendMoney : Home} />
      {/* ---------------Transections Log--------------- */}
      <Route
        path="/lich-su-giao-dich"
        component={isLogged ? TransectionsLog : Home}
      />
      {/* ---------------Pass Book---------------------- */}
      <Route
        path="/gui-so-tiet-kiem"
        component={isLogged ? PassBook : Home}
      />
      <Route
        path="/so-tiet-kiem"
        component={isLogged ? ShowDetail : Home}
      />
    </Switch>
  );
};

export default Routes;
