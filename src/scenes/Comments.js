import React from 'react'
import { Table, Pagination } from 'react-bootstrap'

// Ideally, you'd want to fetch these values from the server.
// But I didn't feel like parsing the HTML headers so I'll
// just hardcode them for now.
const TOTAL_PAGES = 50
const ITEMS_PER_PAGE = 10

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {page: props.match.params.page || 1}
  }

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
      <div>
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

        <Pagination first last next prev
          bsSize="medium"
          items={TOTAL_PAGES}
          activePage={Number.parseInt(this.state.page, 10)}
          maxButtons={10}
          onSelect={(e) => {this.props.history.push('/comments/' + e); this.fetchPage(e)}} />
        <br />

      </div>

    )}

  componentDidMount() {
    this.fetchPage(this.state.page)
  }

  fetchPage(page) {
    fetch('https://jsonplaceholder.typicode.com/comments?_page=' + page + '&_limit=' + ITEMS_PER_PAGE + '&_sort=id')
      .then(function(response) {
        return response.json()
      }).then((json) => {
        this.setState({comments: json, page: page})
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
}

export default Comments