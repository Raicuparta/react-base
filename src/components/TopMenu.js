import React from 'react'
import t from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap'

import MenuItem from './MenuItem'
import TodoCounter from '../containers/TodoCounter'

const TopMenu = ({ items, onTopMenuClick }) => (
  <div>
    <div className="header-image" style={{
      backgroundImage: 'url(' + require('../field.jpg') + ')'
    }}>
      <h1>React Skeleton App</h1>
    </div>
    <Navbar staticTop={true}>
      <Nav>
      {items.map(item =>
        <MenuItem
          path={item.path}
          key={item.path}
          name={item.name}
          exact={item.exact}
          icon={item.icon}
        />
      )}
      <TodoCounter/>
      </Nav>
    </Navbar>
  </div>
)

TopMenu.propTypes = {
  items: t.arrayOf(t.shape({
    name: t.string,
    path: t.string,
    exact: t.bool
  })),
  onTopMenuClick: t.func
}

export default TopMenu