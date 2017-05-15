import React from 'react'
import t from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'
import { observer } from 'mobx-react'
import TodoStore from '../../stores/TodoStore'

const Todo = observer(({ index, text }) => (
  <ListGroupItem
    onClick={() => TodoStore.toggle(index)}
    bsStyle={TodoStore.visibleTodos[index].completed ? 'warning' : null}
  >
    {text}
  </ListGroupItem>
))

Todo.propTypes = {
  index: t.number.isRequired,
  text: t.string.isRequired
}

export default Todo