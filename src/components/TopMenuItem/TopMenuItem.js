import React from 'react'
import t from 'prop-types'
import { NavItem, Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const TopMenuItem = ({ name, path = '', exact, icon = '' }) => (
  <LinkContainer to={path} exact={exact}>
    <NavItem><Glyphicon glyph={icon} /> {name}</NavItem>
  </LinkContainer>
)

TopMenuItem.propTypes = {
  name: t.string,
  path: t.string,
  exact: t.bool,
  icon: t.string
}

export default TopMenuItem