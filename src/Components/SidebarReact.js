import React from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import './sidebar.css';
import { Link } from 'react-router-dom'


const SidebarReact = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar 
      as={Menu}
      animation='push'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'            
    >
      <Link to='/home'><Menu.Item as='a'>
        <Icon name='home' />
        HOME
      </Menu.Item></Link>
      <Link to='/search'><Menu.Item as='a'>
        <Icon name='search' />
        WYSZUKAJ
      </Menu.Item></Link>
      <Link to='favourites'><Menu.Item as='a'>
        <Icon name='thumbs up' />
        ULUBIONE
      </Menu.Item></Link>
      <Link to='addroute'><Menu.Item as='a'>
        <Icon name='plus' />
        DODAJ TRASĘ
      </Menu.Item></Link>
    </Sidebar>

    <Sidebar.Pusher className>
      <Segment basic>
        
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarReact;