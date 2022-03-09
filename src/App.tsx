import React from 'react';
import './App.css';
import Curosal from './Components/Curosal';
import Footer from './Components/Footer';
import Menu from './Components/Menu';

function App() {
  return (
   <div>
    <Menu></Menu>
    <Curosal></Curosal>
    <p style={{margin:"100px 0px"}}>More content goes here</p>
    <Footer></Footer>
   </div>
  );
}

export default App;
