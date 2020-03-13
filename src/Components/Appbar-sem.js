import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'logo' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='logo'
          active={activeItem === 'logo'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='crossRoads'
          active={activeItem === 'crossRoads'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Zaloguj/Zarejestruj'
          active={activeItem === 'Zaloguj/Zarejestruj'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default MenuExampleInverted;
