import React, { useEffect, useState } from "react";
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
import UID from "uniquebrowserid";
import { connect } from "react-redux";
import { boolean } from "yup";

function App(props:any) {
  const [isActive,setIsactive] = useState<boolean>();

  useEffect(()=>{
    const key = new UID().completeID();
    const isLoggedin = props.values.filter((cvalue:any)=>{
      return cvalue.key === key;
    })
    if(isLoggedin.length === 0){
      setIsactive(true);
    }else{
      setIsactive(false);
    }
  })

  const Authenticate = () => {
    const key = new UID().completeID();
    const isLoggedin = props.values.filter((cvalue:any)=>{
      return cvalue.key === key;
    })
    if(isLoggedin.length === 0){
      setIsactive(true);
    }else{
      setIsactive(false);
    }
  }


  return (
    <>
      <ToastContainer />
      <Menu isActive={isActive} auth = {Authenticate}></Menu>
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
          component={() => <AdminLogin authenticate = {Authenticate} ></AdminLogin>}
        ></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

function mapStateToProps(state: { authentication: any }) {
  return {
    values: state.authentication,
  };
}
export default connect(mapStateToProps)(App);
