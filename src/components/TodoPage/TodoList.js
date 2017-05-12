import React from 'react'
import t from 'prop-types'
import { ListGroup, Col } from 'react-bootstrap'
import { observer } from 'mobx-react'

import Todo from './Todo'

let itemCount = 0

@observer
class TodoList extends React.Component {
  static propTypes = {
    todos: t.arrayOf(t.shape({
      completed: t.bool.isRequired,
      text: t.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: t.func.isRequired
  }

  render() {
    const { todos, onTodoClick } = this.props

    return (
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
  }
}

export default TodoList