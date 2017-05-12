import { observable, action, computed } from 'mobx'
import { create, persist } from 'mobx-persist'

class TodoItem {
  @persist @observable text = ''
  @persist @observable completed = false
}

class TodoStore {
  @observable filter = 'SHOW_ALL'
  @persist('list', TodoItem) @observable todos = []

  @computed get visibleTodos() {
    if (this.filter === 'SHOW_ACTIVE')
      return observable(this.todos.filter((e) => !e.completed))
    else if (this.filter === 'SHOW_COMPLETED')
      return observable(this.todos.filter((e) => e.completed))
    else
      return this.todos
  }

  @action add = (text) => {
    this.todos.push({text: text, completed: false})
  }

  @action clear = () => {
    this.todos.clear()
  }

  @action toggle = (text) => {
    let todo = this.todos.find((e) => e.text === text)
    todo.completed = !todo.completed
  }

  @action setFilter = (filter) => this.filter = filter
}

const hydrate = create()
const todoStore = new TodoStore()
hydrate('todo', todoStore)

export default todoStore
export { TodoStore }