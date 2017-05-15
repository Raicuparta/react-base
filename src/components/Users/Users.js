import React from 'react'
import { Table } from 'react-bootstrap'
import { observer } from 'mobx-react'

import User from './User'
import lang from '../../stores/LanguageStore'

@observer
class Users extends React.Component {
  state = {users: []}

  render () { 
    const users = this.state.users.map((user) => (
      <User info={user} key={user.id}/>
    ))
    return (
      <div>
        <h2>Users</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{lang.text('users', 'id')}</th>
              <th>{lang.text('users', 'name')}</th>
              <th>{lang.text('users', 'username')}</th>
              <th>{lang.text('users', 'website')}</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </Table>
      </div>
    )}

  cancelFetch = false
  componentWillUnmount() {this.cancelFetch = true}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        return response.json()
      }).then((json) => {
        if (this.cancelFetch) return
        this.setState({users: json})
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
}

export default Users