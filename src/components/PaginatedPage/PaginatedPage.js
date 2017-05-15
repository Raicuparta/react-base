import React from 'react'
import { Pagination, ProgressBar, Col, Row, Fade } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import t from 'prop-types'
import { observer } from 'mobx-react'

import './index.css'

import PaginationStore from '../../stores/PaginationStore'
import lang from '../../stores/LanguageStore'

@observer
class PaginatedPage extends React.Component {
  static propTypes = {
    page: t.number,
    maxItems: t.number,
    currentUrl: t.string.isRequired,
    fetchUrl: t.string.isRequired,
    sort: t.string,
    desc: t.bool,
    fetchCallback: t.func.isRequired,
    search: t.string
  }

  static defaultProps = {
    page: 1,
    maxItems: 10,
    sort: '',
    desc: false,
    search: ''
  }

  state = {
    page: this.props.page,
    loading: false,
    totalCount: 0
  }

  PaginationContainer = withRouter(({ history }) => (
    <Pagination first last next prev
      bsSize='small'
      items={Math.ceil(this.state.totalCount / this.props.maxItems)}
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
              <ProgressBar active now={100} label={lang.text('loading')}/>
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
    fetch(this.props.fetchUrl + '?_page=' + page + '&_limit=' + this.props.maxItems + '&_sort=' + PaginationStore.sort + '&_order=' + PaginationStore.order + this.props.search)
      .then((response) => {
        this.setState({totalCount: parseInt(response.headers.get('x-total-count'), 10)})
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

export default PaginatedPage