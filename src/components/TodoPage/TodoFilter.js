import React from 'react'
import { observer } from 'mobx-react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import t from 'prop-types'

import lang from '../../stores/LanguageStore'

@observer
class TodoFilter extends React.Component {
  static propTypes = {
    filter: t.string.isRequired,
    onClick: t.func.isRequired
  }

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
        return lang.text('todos', 'filters', 'all')
      case 'SHOW_ACTIVE':
        return lang.text('todos', 'filters', 'active')
      case 'SHOW_COMPLETED':
        return lang.text('todos', 'filters', 'completed')
      default:
        return ''
    } 
  }
}

export default TodoFilter