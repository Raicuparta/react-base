import React from 'react'
import { connect } from 'react-redux'
import { NavItem } from 'react-bootstrap'

const TodoCounter = ({ label }) => (
  <NavItem disabled>{label}</NavItem>
)

const mapStateToProps = (state) => ({
  label: state.todos.length
})

export default connect(mapStateToProps)(TodoCounter)