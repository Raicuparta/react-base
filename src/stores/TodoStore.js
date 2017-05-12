import { observable, action } from 'mobx'

class TodoStore {

  @observable todos

  constructor() {
    this.todos = [{text: 'do it now', completed: false}]
  }

  @action addTodo = (todo) => {
    this.todos.add(todo)
  }

  @action toggle = (text) => {
    this.todos.map(t => {
      if (t.text == text) t.completed = !t.completed
    })
  }

}

const todoStore = new TodoStore()

export default todoStore
export { TodoStore }