import React from 'react'
import { Table, Navbar, FormGroup, FormControl, Button, Well } from 'react-bootstrap'
import { observer } from 'mobx-react'

import PaginatedPage from '../PaginatedPage'
import SortLink from './SortLink'
import PaginationStore from '../../stores/PaginationStore'
import lang from '../../stores/LanguageStore'

const MAX_ITEMS = 10

@observer
class Comments extends React.Component {
  state = {
    comments: [],
    search: '',
    page: this.pageFromUrl
  }

  render () {
    return (
      <PaginatedPage
        fetchUrl='https://jsonplaceholder.typicode.com/comments'
        fetchCallback={this.fetchCallback}
        maxItems={MAX_ITEMS}
        currentUrl={'/comments/'}
        page={this.state.page}
        search={this.state.search.length > 0 ? '&id=' + this.state.search : ''}
        
        // React forces a remount when the key is changed
        // so we change the key like this to force a remount when any of these values change.
        // Right now, we need a remount because the remote content is loaded on mount
        key={this.state.search + PaginationStore.sort + PaginationStore.order}>

        <Navbar>
          <form>
            <Navbar.Form>
              <FormGroup>
                <FormControl
                  type='text'
                  defaultValue={this.state.search}
                  placeholder={lang.text('comments', 'search', 'comment_id')}
                  inputRef={this.searchRef}
                />
              </FormGroup>
              {' '}
              <Button onClick={this.clearSearch}>{lang.text('comments', 'search', 'clear')}</Button>
            </Navbar.Form>
          </form>
        </Navbar>

        <h2>Comments</h2>
        <this.Comments />
      </PaginatedPage>
    )
  }

  get pageFromUrl() {
    return Number.parseInt(this.props.match.params.page, 10) || 1
  }

  fetchCallback = (json, page) => {
    this.setState({comments: json, page: page})
  }

  searchRef = (ref) => {
    if (!ref) return
    ref.oninput = () => {
      this.setState({search: ref.value, page: 1})
    }
    ref.focus()
  }

  clearSearch = () => {
    this.setState({search: '', page: this.pageFromUrl})
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
          <SortLink name={lang.text('comments', 'id')} sortBy='id' />
          <SortLink name={lang.text('comments', 'title')} sortBy='name' />
          <SortLink name={lang.text('comments', 'comment')} sortBy='body' />
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