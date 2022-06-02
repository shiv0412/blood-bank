import React from "react";
import "./App.css";
import DonarSearch from "./Components/donar-search";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/landing-page";
import { ToastContainer } from "react-toastify";
import ContactUs from "./Components/contact-us";
import AdminHome from "./Components/admin-home";
import About from "./Components/About";
import AdminLogin from "./Components/admin-login";

function App() {
  return (
    <>
      <ToastContainer />
      <Menu></Menu>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <LandingPage></LandingPage>}
        ></Route>
        <Route
          path="/donarsearch"
          component={() => <DonarSearch></DonarSearch>}
        ></Route>
        <Route path="/aboutus" component={() => <About></About>}></Route>
        <Route path="/admin" component={() => <AdminHome></AdminHome>}></Route>
        <Route
          path="/dashboard"
          component={() => <AdminHome></AdminHome>}
        ></Route>
        <Route
          path="/adminpannel"
          component={() => <AdminHome></AdminHome>}
        ></Route>
        <Route
          path="/contactus"
          component={() => <ContactUs></ContactUs>}
        ></Route>
         <Route
          path="/donarregister"
          component={() => <AdminHome></AdminHome>}
        ></Route>
         <Route
          path="/stocks"
          component={() => <AdminHome></AdminHome>}
        ></Route>
          <Route
          path="/adminlogin"
          component={() => <AdminLogin></AdminLogin>}
        ></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
