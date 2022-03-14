import React from "react";
import "./App.css";
import DonarRegister from "./Components/DonarRegister";
import DonarSearch from "./Components/DonarSearch";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={()=><LandingPage></LandingPage>}></Route>
        <Route path="/donarregister" component={()=><DonarRegister></DonarRegister>}></Route>
        <Route path="/donarsearch" component={()=><DonarSearch></DonarSearch>}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
