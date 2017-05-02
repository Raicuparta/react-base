import React from 'react'
import PropTypes from 'prop-types'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const MenuItem = ({ name, path = '', exact }) => (
	<LinkContainer to={path} exact={exact}>
    <NavItem>{name}</NavItem>
  </LinkContainer>
)

MenuItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  exact: PropTypes.bool
}

export default MenuItem