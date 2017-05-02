const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.text !== action.text) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'CLEAR_TODOS':
      return []
    default:
      return state
  }
}

export default todos