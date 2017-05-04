import React from 'react'
import { Jumbotron, Glyphicon } from 'react-bootstrap'

const NotFound = () => (
  <Jumbotron>
    <h1><Glyphicon glyph='fire' />  404 - Not Found</h1>
    <p>I'm terribly sorry, but the path <code>{location.pathname}</code> is a myth.</p>
  </Jumbotron>
)

export default NotFound