import React from 'react'
import { NavItem } from 'react-bootstrap'
import t from 'prop-types'

const TodoCounter = ({label}) => (
  <NavItem disabled>{label}</NavItem>
)

TodoCounter.propTypes = {
  label: t.number.isRequired
}

export default TodoCounter