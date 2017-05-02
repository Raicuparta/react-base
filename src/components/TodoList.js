import React, { PropTypes } from 'react'
import Todo from './Todo'
import { ListGroup, Col } from 'react-bootstrap'

const TodoList = ({ todos, onTodoClick }) => (
  <Col sm={4}>
    <ListGroup>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ListGroup>
  </Col>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList