import React from 'react'
import { Table } from 'react-bootstrap'

class Profile extends React.Component {
  render () {
    if (this.state) return (
      <div>
        <h2>{this.state.name}</h2>
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
            <tr>
              <td>{this.state.id}</td>
              <td>{this.state.name}</td>
              <td>{this.state.username}</td>
              <td>{this.state.website}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )

    return null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.userId)
      .then(function(response) {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json)
        this.setState(json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
}

export default Profile