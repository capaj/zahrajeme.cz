import 'capaj/systemjs-hot-reloader/default-listener'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './routes/home'
import Layout from './components/layout'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
addLocaleData(en)

const routes = <Route path='/' component={Layout}>
  <IndexRoute component={Home} />
</Route>

// <Route path='events' component={Events}/>
// <Route path='about' component={About}/>
// <Route path='places' component={Places}/>
// <Route path='profile' component={UserProfile}/>

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
