import React,{useEffect} from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import Routes from "../routes/Routes";
import { login,getProfile } from "../store/slice/user";
import { getInfor } from "../store/action/user";

const Layout = () => {
  const dispatch = useDispatch();
  const isLogged = localStorage.getItem("isLogged");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (isLogged) {
      dispatch(login());
    }
  }, [isLogged, dispatch]);
  useEffect(() => {
    if (isLogged) {
      dispatch(getInfor(user.user.id));
    }
  }, [user, dispatch]);
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <div>
            <Header />
            <Routes />
            <Footer />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
