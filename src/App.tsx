import React, { useState } from "react";
import "./App.css";
import DonarRegister from "./Components/DonarRegister";
import DonarSearch from "./Components/DonarSearch";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { ToastContainer } from "react-toastify";
import About from "./Components/About";
import AdminPannel from "./Components/AdminPannel";
import ContactUs from "./Components/ContactUs";


function App() {
  
  return (
    <div>
      <ToastContainer />
      <Menu></Menu>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <LandingPage></LandingPage>}
        ></Route>
        <Route
          path="/donarregister"
          component={() => <DonarRegister></DonarRegister>}
        ></Route>
        <Route
          path="/donarsearch"
          component={() => <DonarSearch></DonarSearch>}
        ></Route>
        <Route path="/aboutus" component={() => <About></About>}></Route>
        <Route
          path="/admin"
          component={() => <AdminPannel></AdminPannel>}
        ></Route>
        <Route path="/contactus" component={()=> <ContactUs></ContactUs>}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
