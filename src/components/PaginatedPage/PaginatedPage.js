import React from 'react'
import { Pagination, ProgressBar, Col, Row, Fade } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import t from 'prop-types'
import { observer } from 'mobx-react'

import './index.css'

import PaginationStore from '../../stores/PaginationStore'
import lang from '../../stores/LanguageStore'

@withRouter
@observer
class PaginatedPage extends React.Component {
  static propTypes = {
    currentUrl: t.string.isRequired
  }

  PaginationContainer = () => (
    <Pagination first last next prev
      bsSize='small'
      items={Math.ceil(PaginationStore.totalCount / PaginationStore.maxItems)}
      activePage={PaginationStore.page}
      maxButtons={10}
      bsClass='pagination'
      onSelect={(e) => {
        this.props.history.push(this.props.currentUrl + e)
        PaginationStore.page = e
        //this.fetchPage(e)
      }}/>
  )

  render () {
    return (
      <div>
        <Row>
          <Col md={6}>
            <this.PaginationContainer />
          </Col>
          <Col md={5}>
            <Fade in={PaginationStore.loading}>
              <ProgressBar active now={100} label={lang.text('loading')}/>
            </Fade>
          </Col>
        </Row>
        {this.props.children}
        <this.PaginationContainer />
      </div>
    )
  }


  componentWillMount() {
    let p = PaginationStore
    p.page = this.pageFromUrl
  }

  componentWillUnmount() {
    PaginationStore.cancelFetch = true
  }

  get pageFromUrl() {
    return Number.parseInt(this.props.match.params.page, 10) || 1
  }

}

export default PaginatedPage
