import React from 'react'
import { observer } from 'mobx-react'

import TodoMenu from './TodoMenu'
import TodoList from './TodoList'
import TodoStore from '../../stores/TodoStore'

@observer
class TodoPage extends React.Component {
  render() {
    return (
      <div>
        <TodoMenu onAdd={TodoStore.add} onClear={TodoStore.clear} onFilter={TodoStore.setFilter} filter={TodoStore.filter}/>
        <TodoList todos={TodoStore.visibleTodos} />
      </div>
    )
  }
}

export default TodoPage