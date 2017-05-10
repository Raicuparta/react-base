import React from 'react'
import { connect } from 'react-redux'
import { NavItem } from 'react-bootstrap'
import t from 'prop-types'

const TodoCounter = ({ label }) => (
  <NavItem disabled>{label}</NavItem>
)

TodoCounter.propTypes = {
  label: t.number.isRequired
}

const mapStateToProps = (state) => ({
  label: state.todos.length
})

export default connect(mapStateToProps)(TodoCounter)