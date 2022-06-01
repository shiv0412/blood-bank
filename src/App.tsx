import React from "react";
import "./App.css";
import DonarSearch from "./Components/DonarSearch";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { ToastContainer } from "react-toastify";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import AdminHome from "./Components/AdminHome";

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
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
