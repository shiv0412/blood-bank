import React from 'react';
import './App.css';
import Curosal from './Components/Curosal';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Services from './Components/Services';

function App() {
  return (
   <div>
    <Menu></Menu>
    <Curosal></Curosal>
    <Services></Services>
    <Footer></Footer>
   </div>
  );
}

export default App;
