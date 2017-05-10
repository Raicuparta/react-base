import React from 'react'
import t from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'

const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
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