import React from 'react'
import { observer } from 'mobx-react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

@observer
class TodoFilter extends React.Component {

  filters = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED']

  render() {
    const { filter, onClick } = this.props

    return(
      <DropdownButton title={this.filterName(filter)} id='select-filter-dropdown'>
        {this.filters.map((f) => <MenuItem key={f} onClick={() => onClick(f)}>{this.filterName(f)}</MenuItem>)}
      </DropdownButton>
    )
  }

  filterName(filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return 'Show all'
      case 'SHOW_ACTIVE':
        return 'Show active'
      case 'SHOW_COMPLETED':
        return 'Show completed'
      default:
        return ''
    } 
  }
}

export default TodoFilter