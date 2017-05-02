import React from 'react'
//import { Menu } from 'semantic-ui-react'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const MenuItem = ({ name, path, exact }) => (
	<LinkContainer to={path} activeClassName="active" exact={exact}>
    <NavItem>{name}</NavItem>
  </LinkContainer>
)
export default MenuItem