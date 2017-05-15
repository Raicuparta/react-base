import React from 'react'
import t from 'prop-types'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import './index.css'

import TodoStore from '../../stores/TodoStore'
import lang from '../../stores/LanguageStore'
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
            name={lang.text('topMenu', item.name)}
            exact={item.exact}
            icon={item.icon}
          />
        )}
        <TodoCounter label={TodoStore.todos.length}/>
        <NavDropdown title={lang.language()} id='select-language-dropdown' onSelect={lang.setLang}>
          <MenuItem eventKey={'en'}>{lang.language('en')}</MenuItem>
          <MenuItem eventKey={'pt'}>{lang.language('pt')}</MenuItem>
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
    exact: t.bool,
    icon: t.string
  })),
  onTopMenuClick: t.func
}

export default withRouter(TopMenu)