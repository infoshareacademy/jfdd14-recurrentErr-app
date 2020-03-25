import React, { Component } from 'react';
import './App.css';
import SidebarReact from './Components/SidebarReact';
import AppbarReact from './Components/AppbarReact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddRoute from './pages/AddRoute';
import Details from './pages/Details';
import Favourites from './pages/Favourites';
import FavouritesDetails from './pages/FavouritesDetails';
import Search from './pages/Search';
import SearchList from './pages/SearchList';
import Default from './pages/Default';
import Home from './pages/Home';

class App extends Component {
  render(){
  return (
    <React.Fragment>
    <BrowserRouter> 
        <AppbarReact />
        <SidebarReact />        
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/addroute' component={AddRoute} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/favourites' component={Favourites} />
            <Route exact path='/favouritesdetails' component={FavouritesDetails} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/searchlist' component={SearchList} />
            <Route component={Default} />
        </Switch>   
    </BrowserRouter> 
    </React.Fragment>        
      
  )}
}

export default App;
