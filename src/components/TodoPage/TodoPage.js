import React from 'react'
import { observer } from 'mobx-react'

import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'
import TodoStore from '../../stores/TodoStore'

@observer
class TodoPage extends React.Component {
  render() {
    return (
      <div>
        <AddTodo onAdd={TodoStore.add} onClear={TodoStore.clear}/>
        <TodoList todos={TodoStore.visibleTodos} onTodoClick={TodoStore.toggle} />
        <Footer onClick={TodoStore.setFilter} filter={TodoStore.filter}/>
      </div>
    )
  }
}

export default TodoPage