import React from 'react'
import { Pagination } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class PaginatedPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {page: props.page || 1}
  }

  render () {
    let paginationContainer = <PaginationContainer totalPages={this.props.totalPages} page={this.state.page} onSelect={(e) => this.fetchPage(e)} currentUrl={this.props.currentUrl}/>
    return (
      <div>
        {paginationContainer}
        {this.props.children}
        {paginationContainer}
      </div>
    )}

  componentDidMount() {
    this.fetchPage(this.state.page)
  }

  fetchPage(page) {
    fetch(this.props.fetchUrl + '?_page=' + page + '&_limit=' + this.props.maxItems + '&_sort=id')
      .then(function(response) {
        return response.json()
      }).then((json) => {
        this.setState({page: page})
        this.props.fetchCallback(json, page)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
}

export default PaginatedPage

const PaginationContainer = withRouter(({ history, totalPages, page, onSelect, currentUrl }) => (
  <Pagination first last next prev
    bsSize="medium"
    items={totalPages}
    activePage={Number.parseInt(page, 10)}
    maxButtons={10}
    onSelect={(e) => {history.push(currentUrl + e); onSelect(e)}} />
))