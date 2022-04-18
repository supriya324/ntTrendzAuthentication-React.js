import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import LoginForm from './components/LoginForm'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact to="/login" component={LoginForm} />
    <Route exact to="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
