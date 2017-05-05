import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import Home from './scenes/Home'
import Topics from './scenes/Topics'
import Users from './scenes/Users'
import TodoPage from './scenes/TodoPage'
import Profile from './scenes/Profile'
import Comments from './scenes/Comments'
import Photos from './scenes/Photos'
import NotFound from './scenes/NotFound'
import TopMenu from './components/TopMenu'

const topMenuItems = [
  {name: 'Home', path: '/', exact: true, icon: 'home'},
  {name: 'Users', path: '/users', icon: 'user'},
  {name: 'Topics', path: '/topics', icon: 'list'},
  {name: 'Comments', path: '/comments', icon: 'comment'},
  {name: 'Photos', path: '/photos', icon: 'camera'},
  {name: 'To-Dos', path: '/todos', icon: 'list-alt'},
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