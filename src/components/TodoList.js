import React, { PropTypes } from 'react'
import Todo from './Todo'
import { ListGroup, Col } from 'react-bootstrap'

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
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList