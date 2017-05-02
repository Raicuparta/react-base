import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import MenuItem from './MenuItem'

const TopMenu = ({ items, onTopMenuClick }) => (
  <div>
    <div className="header-image"/>
    <Navbar staticTop={true}>
      <Nav>
      {items.map(item =>
        <MenuItem
          path={item.path}
          key={item.path}
          name={item.name}
          exact={item.exact}
        />
      )}
      </Nav>
    </Navbar>
  </div>
)

export default TopMenu