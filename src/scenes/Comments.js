import React from 'react'
import { Table, Navbar, FormGroup, FormControl, Button, Well } from 'react-bootstrap'

import PaginatedPage from '../containers/PaginatedPage'
import SortLink from '../components/SortLink'

// Ideally, you'd want to fetch these values from the server.
// But I didn't feel like parsing the HTML headers so I'll
// just hardcode them for now.
const TOTAL_PAGES = 50
const MAX_ITEMS = 10

class Comments extends React.Component {
  state = {comments: [], search: ''}

  render () {
    return (
      <PaginatedPage
        fetchUrl='https://jsonplaceholder.typicode.com/comments'
        fetchCallback={this.fetchCallback}
        totalPages={TOTAL_PAGES}
        maxItems={MAX_ITEMS}
        currentUrl={'/comments/'}
        page={Number.parseInt(this.props.match.params.page, 10) || 1}
        search={this.state.search.length > 0 ? '&id=' + this.state.search : ''}
        key={this.state.search}>

        <Navbar>
          <form>
            <Navbar.Form>
              <FormGroup>
                <FormControl
                  type='text'
                  defaultValue={this.state.search}
                  placeholder='Comment ID'
                  inputRef={this.searchRef}
                />
              </FormGroup>
              {' '}
              <Button onClick={this.clearSearch}>Clear</Button>
            </Navbar.Form>
          </form>
        </Navbar>

        <h2>Comments</h2>
        <this.Comments />
      </PaginatedPage>
    )}

  fetchCallback = (json, page) => {
    this.setState({comments: json, page: page})
  }

  searchRef = (ref) => {
    if (!ref) return
    ref.oninput = () => {
      this.setState({search: ref.value})
    }
    ref.focus()
  }

  clearSearch = () => {
    this.setState({search: ''})
  }

  Comments = () => {
    if (this.state.comments.length > 0)
      return <this.CommentList />
    else
      return <Well>No comments found</Well>
  }

  CommentList = () => (
    <Table striped hover>
      <thead>
        <tr>
          <SortLink name='ID' sortBy='id' />
          <SortLink name='Name' sortBy='name' />
          <SortLink name='Comment' sortBy='body' />
        </tr>
      </thead>
      <tbody>
        {this.state.comments.map((comment) => (
        <tr key={comment.id}>
          <td>{comment.id}</td>
          <td>{comment.name}</td>
          <td>{comment.body}</td>
        </tr>))}
      </tbody>
    </Table>
  )

}

export default Comments