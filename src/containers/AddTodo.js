import React from 'react'
import { connect } from 'react-redux'
import { addTodo, clearTodos } from '../actions'
import { FormGroup, FormControl, Button, Navbar } from 'react-bootstrap'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <Navbar>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
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
          <Button onClick={() => {dispatch(clearTodos())}}>Clear List</Button>
        </Navbar.Form>
      </form>
    </Navbar>
  )
}

export default connect()(AddTodo)