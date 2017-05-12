import React from 'react'
import t from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

import './index.css'

const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    bsStyle={completed ? 'warning' : 'default'}
  >
    {text}
  </ListGroupItem>
)

Todo.propTypes = {
  onClick: t.func.isRequired,
  completed: t.bool.isRequired,
  text: t.string.isRequired
}

export default Todo