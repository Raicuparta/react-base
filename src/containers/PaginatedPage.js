import React from 'react'
import { Pagination, ProgressBar, Col, Row, Fade } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class PaginatedPage extends React.Component {
  static propTypes = {
    totalPages: PropTypes.number,
    page: PropTypes.number,
    maxItems: PropTypes.number,
    currentUrl: PropTypes.string.isRequired,
    fetchUrl: PropTypes.string.isRequired,
    sort: PropTypes.string,
    desc: PropTypes.bool,
    fetchCallback: PropTypes.func.isRequired,
    search: PropTypes.string
  }

  static defaultProps = {
    totalPages: 1,
    page: 1,
    maxItems: 10,
    sort: '',
    desc: false
  }

  state = {
    page: this.props.page,
    loading: false
  }

  PaginationContainer = withRouter(({ history }) => (
    <Pagination first last next prev
      bsSize='small'
      items={this.props.totalPages}
      activePage={this.state.page}
      maxButtons={10}
      bsClass='pagination'
      onSelect={(e) => {
        history.push(this.props.currentUrl + e)
        this.fetchPage(e)
      }}/>
  ))

  render () {
    return (
      <div>
        <Row>
          <Col md={6}>
            <this.PaginationContainer />
          </Col>
          <Col md={5}>
            <Fade in={this.state.loading}>
              <ProgressBar active now={100} label="Loading..."/>
            </Fade>
          </Col>
        </Row>
        {this.props.children}
        <this.PaginationContainer />
      </div>
    )
  }

  componentDidMount() {this.fetchPage(this.props.page)}

  cancelFetch = false
  componentWillUnmount() {this.cancelFetch = true}

  fetchPage = (page) => {
    this.setState({loading: true, page: page})
    fetch(this.props.fetchUrl + '?_page=' + page + '&_limit=' + this.props.maxItems + '&_sort=' + this.props.sort + '&_order=' + (this.props.desc ? 'DESC' : 'ASC') + this.props.search)
      .then((response) => {
        return response.json()
      }).then((json) => {
        if (this.cancelFetch) return
        this.setState({loading: false})
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