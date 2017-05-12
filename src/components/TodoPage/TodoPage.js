import React from 'react'

import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'
import TodoStore from '../../stores/TodoStore'

const TodoPage = () => (
  <div>
    <AddTodo onAdd={TodoStore.add} onClear={TodoStore.clear}/>
    <TodoList todos={TodoStore.todos} onTodoClick={TodoStore.toggle} />
    <Footer />
  </div>
)

export default TodoPage