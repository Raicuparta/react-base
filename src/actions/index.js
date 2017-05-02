export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (text) => {
  return {
    type: 'TOGGLE_TODO',
    text
  }
}