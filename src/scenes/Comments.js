import React from 'react'
import { Table } from 'react-bootstrap'

import PaginatedPage from '../containers/PaginatedPage'
import SortLink from '../components/SortLink'

// Ideally, you'd want to fetch these values from the server.
// But I didn't feel like parsing the HTML headers so I'll
// just hardcode them for now.
const TOTAL_PAGES = 50
const MAX_ITEMS = 10

class Comments extends React.Component {
  state = {comments: []}

  render () {
    let comments = []
    comments = this.state.comments.map((comment) => (
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
              <SortLink name='ID' sortBy='id' />
              <SortLink name='Name' sortBy='name' />
              <SortLink name='Comment' sortBy='body' />
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