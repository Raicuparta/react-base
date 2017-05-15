import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Row, Nav, Col, Well, Panel } from 'react-bootstrap'

import Topic from './Topic'
import TopMenuItem from '../TopMenuItem'

export default class Topics extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Row>
        <Col sm={4}>
          <Panel>
            <Nav bsStyle="pills" stacked>
              <TopMenuItem path={'/topics/rendering'} name='rendering'/>
              <TopMenuItem path={'/topics/components'} name='components'/>
              <TopMenuItem path={'/topics/props-v-state'} name='props-v-state'/>
            </Nav>
          </Panel>
        </Col>

        <Col sm={8}>
          <Well>
            <Route path={'/topics/:topicId'} component={Topic}/>
            <Route exact path={this.props.match.url} render={() => (
              <h3>Please select a topic.</h3>
            )}/>
          </Well>
        </Col>
      </Row>
    )
  }
}