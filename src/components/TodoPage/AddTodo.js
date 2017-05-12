import React from 'react'
import { FormGroup, FormControl, Button, Navbar } from 'react-bootstrap'

const AddTodo = ({ onAdd, onClear }) => {
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
        </Navbar.Form>
      </form>
    </Navbar>
  )
}

export default AddTodo