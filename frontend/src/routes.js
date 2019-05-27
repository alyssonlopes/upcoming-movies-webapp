import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import ScrollToTop from './components/ScrollToTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/details' component={ Details } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )