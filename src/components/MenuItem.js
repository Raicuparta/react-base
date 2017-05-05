import React from 'react'
import PropTypes from 'prop-types'
import { NavItem, Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const MenuItem = ({ name, path = '', exact, icon = '' }) => (
  <LinkContainer to={path} exact={exact}>
    <NavItem><Glyphicon glyph={icon} />   {name}</NavItem>
  </LinkContainer>
)

MenuItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool,
  icon: PropTypes.string
}

export default MenuItem