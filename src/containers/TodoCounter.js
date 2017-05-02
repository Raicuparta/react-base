import React from 'react'
import { connect } from 'react-redux'
import { Label, NavItem } from 'react-bootstrap'

const Counter = ({ label }) => (
  <NavItem disabled>{label}</NavItem>
)

const mapStateToProps = (state) => ({
  label: state.todos.length
})

const TodoCounter = connect(
  mapStateToProps
)(Counter)

export default TodoCounter