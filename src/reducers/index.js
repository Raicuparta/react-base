import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import sortOrder from './sortOrder'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  sortOrder
})

export default todoApp