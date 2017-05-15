import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { observer } from 'mobx-react'

import lang from '../../stores/LanguageStore'

const Home = observer(() => (
  <Jumbotron>
    <h1>{lang.text('home', 'title')}</h1>
    <p>{lang.text('home', 'description')}</p>
    <p><Button bsStyle="primary">{lang.text('home', 'button')}</Button></p>
  </Jumbotron>
))

export default Home