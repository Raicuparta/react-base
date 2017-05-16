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
  render () {
    return (
      <PaginatedPage currentUrl={'/comments/'}>
        <Navbar>
          <form>
            <Navbar.Form>
              <FormGroup>
                <FormControl
                  type='text'
                  placeholder={lang.text('comments', 'search', 'comment_id')}
                  inputRef={this.searchRef}
                />
              </FormGroup>
              {' '}
              <Button onClick={this.clearSearch}>{lang.text('comments', 'search', 'clear')}</Button>
            </Navbar.Form>
          </form>
        </Navbar>
        <this.Comments />
      </PaginatedPage>
    )
  }

  componentWillMount() {
    PaginationStore.maxItems = MAX_ITEMS
    PaginationStore.url = 'https://jsonplaceholder.typicode.com/comments'
  }

  searchRef = (ref) => {
    if (!ref) return
    ref.oninput = () => {
      PaginationStore.search = ref.value
      PaginationStore.page = 1
    }
    ref.focus()
  }

  clearSearch = () => {
    PaginationStore.search = ''
  }

  Comments = observer(() => {
    if (PaginationStore.content.length > 0)
      return <this.CommentList />
    else
      return <Well>No comments found</Well>
  })

  CommentList = observer(() => (
    <Table striped hover>
      <thead>
        <tr>
          <SortLink name={lang.text('comments', 'id')} sortBy='id' />
          <SortLink name={lang.text('comments', 'title')} sortBy='name' />
          <SortLink name={lang.text('comments', 'comment')} sortBy='body' />
        </tr>
      </thead>
      <tbody>
        {PaginationStore.content.map((comment) => (
        <tr key={comment.id}>
          <td>{comment.id}</td>
          <td>{comment.name}</td>
          <td>{comment.body}</td>
        </tr>))}
      </tbody>
    </Table>
  ))
}

export default Comments
