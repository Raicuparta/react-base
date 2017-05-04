import React from 'react'
import { Pagination } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PaginatedPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: props.page || 1
    }

    this.PaginationContainer = withRouter(({ history }) => (
      <Pagination first last next prev
        bsSize="medium"
        items={props.totalPages}
        activePage={Number.parseInt(this.state.page, 10)}
        maxButtons={10}
        onSelect={(e) => {
          history.push(props.currentUrl + e)
          this.fetchPage(e)
        }}/>
    ))
  }

  render () {
    return (
      <div>
        <this.PaginationContainer />
        {this.props.children}
        <this.PaginationContainer />
      </div>
    )
  }

  componentDidMount() {
    this.fetchPage(this.state.page)
  }

  fetchPage(page) {
    fetch(this.props.fetchUrl + '?_page=' + page + '&_limit=' + this.props.maxItems + '&_sort=' + this.props.sort + '&_order=' + (this.props.desc ? 'DESC' : 'ASC'))
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

const mapStateToProps = (state) => ({
  sort: state.sortOrder.sort,
  desc: state.sortOrder.desc,
  // Changing the 'key' atribute makes React remount the component.
  // Setting it up like this makes it remount every time the sort method/order is changed.
  key: state.sortOrder.sort + state.sortOrder.desc
})

export default connect(mapStateToProps)(PaginatedPage)