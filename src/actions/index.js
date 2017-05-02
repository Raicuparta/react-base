export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (text) => ({
  type: 'TOGGLE_TODO',
  text
})

export const clearTodos = () => ({
  type: 'CLEAR_TODOS'
})