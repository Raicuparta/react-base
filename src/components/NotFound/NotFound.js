import React from 'react'
import { Jumbotron, Glyphicon } from 'react-bootstrap'
import { observer } from 'mobx-react'

import lang from '../../stores/LanguageStore.js'

const NotFound = observer(() => (
  <Jumbotron>
    <h1><Glyphicon glyph='fire' />  404 - {lang.text('notFound', 'title')}</h1>
    <p>{lang.text('notFound', 'messageBeforePath')} <code>{location.pathname}</code>{lang.text('notFound', 'messageAfterPath')}</p>
  </Jumbotron>
))

export default NotFound
