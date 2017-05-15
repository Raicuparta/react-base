import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Row, Nav, Col, Well, Panel } from 'react-bootstrap'
import { observer } from 'mobx-react'

import lang from '../../stores/LanguageStore'
import Topic from './Topic'
import TopMenuItem from '../TopMenuItem'

@observer
export default class Topics extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Row>
        <Col sm={4}>
          <Panel>
            <Nav bsStyle="pills" stacked>
              <TopMenuItem path={'/topics/rendering'} name={lang.text('topics', 'rendering')}/>
              <TopMenuItem path={'/topics/components'} name={lang.text('topics', 'components')}/>
              <TopMenuItem path={'/topics/props-v-state'} name={lang.text('topics', 'propsVsState')}/>
            </Nav>
          </Panel>
        </Col>

        <Col sm={8}>
          <Well>
            <Route path={'/topics/:topicId'} component={Topic}/>
            <Route exact path={this.props.match.url} render={() => (
              <h3>{lang.text('topics', 'pleaseSelect')}</h3>
            )}/>
          </Well>
        </Col>
      </Row>
    )
  }
}