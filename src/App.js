import React from 'react'
import Home from './scenes/Home'
import Topics from './scenes/Topics'
import Users from './scenes/Users'
import TodoPage from './scenes/TodoPage'
import TopMenu from './components/TopMenu'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Grid } from 'react-bootstrap'

const topMenuItems = [
  {name: 'Home', path: '/', exact: true},
  {name: 'Users', path: '/users'},
  {name: 'Topics', path: '/topics'},
  {name: 'To-Dos', path: '/todos'},
]

const App = () => (
  <Router>
    <div>
      <TopMenu items={topMenuItems}/>
      <Grid>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/todos" component={TodoPage}/>
      </Grid>
    </div>
  </Router>
)

export default App