import React from 'react'
import { FormGroup, FormControl, Button, Navbar } from 'react-bootstrap'
import { observer } from 'mobx-react'

import TodoFilter from './TodoFilter'
import lang from '../../stores/LanguageStore'

const TodoMenu = observer(({ onAdd, onClear, onFilter, filter }) => {
  let input

  return (
    <Navbar>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onAdd(input.value)
        input.value = ''
      }}>
        <Navbar.Form>
          <FormGroup>
            <FormControl type="text" placeholder={lang.text('todos', 'enter_text')}
              inputRef={node => {
                input = node
              }}/>
          </FormGroup>
          {' '}
          <Button type="submit">{lang.text('todos', 'add')}</Button>
          {' '}
          <Button onClick={onClear}>{lang.text('todos', 'clear')}</Button>
          {' '}
          <TodoFilter onClick={onFilter} filter={filter}/>
        </Navbar.Form>
      </form>
    </Navbar>
  )
})

export default TodoMenu