import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddRoute from './pages/AddRoute';
import Details from './pages/Details';
import Favourites from './pages/Favourites';
import FavouritesDetails from './pages/FavouritesDetails';
import Search from './pages/Search';
import SearchList from './pages/SearchList';
import Default from './pages/Default'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path='/dashboard' component={Home} />
            <Route exact path='/addroute' component={AddRoute} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/favourites' component={Favourites} />
            <Route exact path='/favouritesdetails' component={FavouritesDetails} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/searchlist' component={SearchList} />
            <Route component={Default} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
