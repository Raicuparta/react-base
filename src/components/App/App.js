import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import Home from '../Home'
import Topics from '../Topics'
import Users from '../Users'
import TodoPage from '../TodoPage'
import Profile from '../Profile'
import Comments from '../Comments'
import Photos from '../Photos'
import NotFound from '../NotFound'
import TopMenu from '../TopMenu'

const topMenuItems = [
  {name: 'home', path: '/', exact: true, icon: 'home'},
  {name: 'users', path: '/users', icon: 'user'},
  {name: 'topics', path: '/topics', icon: 'list'},
  {name: 'comments', path: '/comments', icon: 'comment'},
  {name: 'photos', path: '/photos', icon: 'camera'},
  {name: 'todos', path: '/todos', icon: 'list-alt'},
]

const App = () => (
  <Router>
    <div>
      <TopMenu items={topMenuItems}/>
      <Grid>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/todos" component={TodoPage}/>
          <Route path={'/users/:userId'} component={Profile}/>
          <Route path={'/comments/:page?'} component={Comments}/>
          <Route path={'/photos/:page?'} component={Photos}/>
          <Route component={NotFound}/>
        </Switch>
      </Grid>
    </div>
  </Router>
)

export default App

export { App }