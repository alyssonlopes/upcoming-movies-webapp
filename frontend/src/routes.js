import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import ScrollToTop from './components/ScrollToTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/details/:movie' component={ MovieDetails } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )