import React from 'react'
import User from '../components/User'
import { Table } from 'react-bootstrap'

class Users extends React.Component {
  render () { 
    let users = []
    if (this.state && this.state.users) users = this.state.users.map((user) => (
      <User info={user} key={user.id}/>
    ))
    return (
      <div>
        <h2>Users</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </Table>
      </div>
    )}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json)
        this.setState({users: json})
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
}

export default Users