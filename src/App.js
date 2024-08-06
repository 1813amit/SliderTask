

// src/App.js
import React from 'react';
import Slider from '../src/Component/Slider'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App" style={{backgroundColor:"black", height:"100vh"}}>
    {/* <Navbar /> */}
      <h1 style={{textAlign:'center',color:'#E4D282',fontFamily:"Great Vibes",fontSize:"60px"}}>Trending</h1>
      <h1 style={{textAlign:'center',color:'#E4D282',fontFamily:"-moz-initial",fontSize:"70px", fontWeight:"900"}}>Projects</h1>
      <Slider />
    </div>
  );
}

export default App;

