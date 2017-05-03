import React from 'react'
import PropTypes from 'prop-types'
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
        />
      )}
      <TodoCounter/>
      </Nav>
    </Navbar>
  </div>
)

TopMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    exact: PropTypes.bool
  })),
  onTopMenuClick: PropTypes.func
}

export default TopMenu