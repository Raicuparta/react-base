import React from 'react'
import t from 'prop-types'
import { ListGroup, Col } from 'react-bootstrap'
import { PropTypes as mt, observer } from 'mobx-react'

import Todo from './Todo'

@observer
class TodoList extends React.Component {
  static propTypes = {
    todos: mt.observableArrayOf(t.shape({
      completed: t.bool.isRequired,
      text: t.string.isRequired
    }).isRequired).isRequired
  }

  render() {
    const todos = this.props.todos

    return (
      <Col sm={4}>
        <ListGroup>
          { todos.map((todo, index) =>
            <Todo
              key={index}
              index={index}
              {...todo}
            />
          )}
        </ListGroup>
      </Col>
    )
  }
}

export default TodoList