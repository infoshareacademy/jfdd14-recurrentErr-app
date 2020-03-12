import React, { Component } from 'react';
import './App.css';
// import Appbar from './Components/Appbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';


import Appbar from './Components/Appbar';


class App extends Component {
  render(){
  return (
    <div>
      <Appbar />
      <Sidebar />
      <Footer />
    </div>   
  )}
}

export default App;
