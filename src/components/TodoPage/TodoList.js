import React from 'react'
import t from 'prop-types'
import { ListGroup, Col } from 'react-bootstrap'

import Todo from './Todo'

let itemCount = 0

const TodoList = ({ todos, onTodoClick }) => (
  <Col sm={4}>
    <ListGroup>
      { todos.map(todo =>
        <Todo
          key={itemCount++}
          {...todo}
          onClick={() => onTodoClick(todo.text)}
        />
      )}
    </ListGroup>
  </Col>
)

TodoList.propTypes = {
  todos: t.arrayOf(t.shape({
    completed: t.bool.isRequired,
    text: t.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: t.func.isRequired
}

export default TodoList