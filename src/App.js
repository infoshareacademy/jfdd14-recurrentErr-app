import React, { Component } from 'react';
import './App.css';
import Appbar from './Components/Appbar';
import SidebarReact from './Components/SidebarReact';
import Footer from './Components/Footer';

class App extends Component {
  render(){
  return (
    <div>
      <Appbar />
      <SidebarReact />
      <Footer />
    </div>   
  )}
}

export default App;
