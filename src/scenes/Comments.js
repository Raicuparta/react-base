import React from 'react'
import { Table } from 'react-bootstrap'
import PaginatedPage from '../containers/PaginatedPage'

// Ideally, you'd want to fetch these values from the server.
// But I didn't feel like parsing the HTML headers so I'll
// just hardcode them for now.
const TOTAL_PAGES = 50
const MAX_ITEMS = 10

class Comments extends React.Component {
  render () {
    let comments = []
    if (this.state && this.state.comments) comments = this.state.comments.map((comment) => (
      <tr key={comment.id}>
        <td>{comment.id}</td>
        <td>{comment.name}</td>
        <td>{comment.body}</td>
      </tr>
    ))
    return (
      <PaginatedPage
        fetchUrl='https://jsonplaceholder.typicode.com/comments'
        fetchCallback={(json, page) => this.fetchCallback(json, page)}
        totalPages={TOTAL_PAGES}
        maxItems={MAX_ITEMS}
        currentUrl={'/comments/'}
        page={this.props.match.params.page}>
        <h2>Comments</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {comments}
          </tbody>
        </Table>
      </PaginatedPage>
    )}

  fetchCallback(json, page) {
    this.setState({comments: json, page: page})
  }
}

export default Comments