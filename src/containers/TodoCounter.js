import { connect } from 'react-redux'
import MenuItem from '../components/MenuItem'

const mapStateToProps = (state) => {
  return {
    name: 'Total: ' + state.todos.length,
    path: 'todos'
  }
}

const TodoCounter = connect(
  mapStateToProps
)(MenuItem)

export default TodoCounter