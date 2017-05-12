import React from 'react'
import t from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap'
import { observer } from 'mobx-react'
import TodoStore from '../../stores/TodoStore'
import { withRouter } from 'react-router-dom'

import MenuItem from '../MenuItem'
import TodoCounter from './TodoCounter'

const TopMenu = observer(({ items, onTopMenuClick }) => (
  <div>
    <div className="header-image" style={{
      backgroundImage: 'url(' + require('./field.jpg') + ')'
    }}>
      <h1>React Skeleton App</h1>
    </div>
    <Navbar staticTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
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
        <TodoCounter label={TodoStore.todos.length}/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
))

TopMenu.propTypes = {
  items: t.arrayOf(t.shape({
    name: t.string,
    path: t.string,
    exact: t.bool
  })),
  onTopMenuClick: t.func
}

export default withRouter(TopMenu)