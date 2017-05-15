import React from 'react'
import { FormGroup, FormControl, Button, Navbar } from 'react-bootstrap'

import TodoFilter from './TodoFilter'

const TodoMenu = ({ onAdd, onClear, onFilter, filter }) => {
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
            <FormControl type="text" placeholder="Enter text"
              inputRef={node => {
                input = node
              }}/>
          </FormGroup>
          {' '}
          <Button type="submit">Add Todo</Button>
          {' '}
          <Button onClick={onClear}>Clear List</Button>
          {' '}
          <TodoFilter onClick={onFilter} filter={filter}/>
        </Navbar.Form>
      </form>
    </Navbar>
  )
}

export default TodoMenu