import 'capaj/systemjs-hot-reloader/default-listener'
import './css/zahrajeme.css!'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Events from './routes/events'
import Users from './routes/users'
import About from './routes/about'
import NewEvent from './routes/new-event'
import UserProfile from './routes/profile'
import Locations from './routes/locations'
import Layout from './components/layout'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import backend from './services/backend'

window.backend = backend
addLocaleData(en)

const routes = <Route path='/' component={Layout}>
  <IndexRoute component={Events} />
  <Route path='about' component={About} />
  <Route path='events' component={Events}>
  </Route>
  <Route path='events/new' component={NewEvent} />
  <Route path='locations' component={Locations} />
  <Route path='users' component={Users} />
  <Route path='profile' component={UserProfile} />
</Route>

class RenderForcer extends React.Component {
  componentWillMount () {
    this.forceUpdate()  // a little hack to help us rerender when this module is reloaded
  }
  render () {
    return <IntlProvider locale='en'>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  }
}

ReactDOM.render((
  <RenderForcer />
), document.getElementById('app'))
