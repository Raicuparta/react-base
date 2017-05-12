import { observable, action, autorun } from 'mobx'

class TodoStore {

  @observable filter = 'SHOW_ALL'
  @observable todos
  @observable visibleTodos

  constructor() {
    this.todos = [{text: 'do it now', completed: false}]
  }

  updateVisibleTodos = autorun(() => {
    if (this.filter === 'SHOW_ACTIVE')
      this.visibleTodos = this.todos.filter((e) => !e.completed)
    else if (this.filter === 'SHOW_COMPLETED')
      this.visibleTodos = this.todos.filter((e) => e.completed)
    else this.visibleTodos = this.todos
  })

  // @computed get visibleTodos() {
  //   if (this.filter === 'SHOW_ACTIVE')
  //     return this.todos.filter((e) => !e.completed)
  //   else if (this.filter === 'SHOW_COMPLETED')
  //     return this.todos.filter((e) => e.completed)
  //   else
  //     return this.todos
  // }

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

const todoStore = new TodoStore()

export default todoStore
export { TodoStore }