import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'



class Appbar extends Component {



    render() {

        return (
            // <div className="ui inverted menu">
            //     logo
            //     <h2>Crossroads</h2>
            //     <Link to="/Login">Zaloguj / Zarejestruj</Link>
            // </div>

<div class="ui inverted menu">
  <a class="item">Logo  </a>
  <a class="item">  crossRoads   </a>
  <a class="item"><Link to="/Login">  Zaloguj / Zarejestruj</Link></a>
</div>


        )
    }
}
export default Appbar;