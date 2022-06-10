/* library imports */
import "./App.css";
import React, { useEffect, useState } from "react";
import UID from "uniquebrowserid";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
/* custom imports */
import DonarSearch from "./Components/blood-search";
import Footer from "./Components/footer";
import Menu from "./Components/menu";
import LandingPage from "./Components/landing-page";
import ContactUs from "./Components/contact-us";
import AdminHome from "./Components/admin-home";
import About from "./Components/about";
import AdminLogin from "./Components/admin-login";
import { IReduxStore } from "./Redux/reducers/initialState";
import RegisterBloodbank from "./Components/register-bloodbank";
import { IAccountDetails } from "./models/models";

/* main component */

function App(props: any) {
  const [isActive, setIsactive] = useState<boolean>();

  useEffect(() => {
    const key = new UID().completeID();
    const isLoggedin = props.values.filter(
      (accountDetails: IAccountDetails) => {
        return accountDetails.key === key;
      }
    );
    if (isLoggedin.length === 0) {
      setIsactive(true);
    } else {
      setIsactive(false);
    }
  }, [props.values]);

  const Authenticate = () => {
    const key = new UID().completeID();
    const isLoggedin = props.values.filter(
      (accountDetails: IAccountDetails) => {
        return accountDetails.key === key;
      }
    );
    if (isLoggedin.length === 0) {
      setIsactive(true);
    } else {
      setIsactive(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Menu isActive={isActive} auth={Authenticate}></Menu>
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
        <Route path="/stocks" component={() => <AdminHome></AdminHome>}></Route>
        <Route
          path="/adminlogin"
          component={() => (
            <AdminLogin authenticate={Authenticate}></AdminLogin>
          )}
        ></Route>
        <Route
          path="/registerbloodbank"
          component={() => <RegisterBloodbank></RegisterBloodbank>}
        ></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.adminAccount,
  };
}
export default connect(mapStateToProps)(App);
