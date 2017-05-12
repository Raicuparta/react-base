import { observable, action } from 'mobx'

class TodoStore {

  @observable todos

  constructor() {
    this.todos = [{text: 'do it now', completed: false}]
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
}

const todoStore = new TodoStore()

export default todoStore
export { TodoStore }