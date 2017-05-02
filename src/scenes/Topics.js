import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Topic from '../components/Topic'
import { Row, Nav, Col, Well, Panel } from 'react-bootstrap'
import MenuItem from '../components/MenuItem'

export default class Topics extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Row>
        <Col sm={4}>
          <Panel>
            <Nav bsStyle="pills" stacked>
              <MenuItem path={'/topics/rendering'} name='rendering'/>
              <MenuItem path={'/topics/components'} name='components'/>
              <MenuItem path={'/topics/props-v-state'} name='props-v-state'/>
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