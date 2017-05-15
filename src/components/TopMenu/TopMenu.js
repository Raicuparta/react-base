import React from 'react'
import t from 'prop-types'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import './index.css'

import TodoStore from '../../stores/TodoStore'
import GlobalStore from '../../stores/GlobalStore'
import TopMenuItem from '../TopMenuItem'
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
          <TopMenuItem
            path={item.path}
            key={item.path}
            name={GlobalStore.text('topMenu', item.name)}
            exact={item.exact}
            icon={item.icon}
          />
        )}
        <TodoCounter label={TodoStore.todos.length}/>
        <NavDropdown title={GlobalStore.lang} id='select-language-dropdown' onSelect={GlobalStore.setLang}>
          <MenuItem eventKey={'en'}>English</MenuItem>
          <MenuItem eventKey={'pt'}>Português</MenuItem>
        </NavDropdown>
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