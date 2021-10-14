import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <span> | </span>
          <Link to="/user">用户中心</Link>

          <Switch>
            <Route path="/"
              exact
              component={HomePage}
              children={() => (<div>children</div>)}
              render={() => (<div>render</div>)}
            ></Route>
            <Route path="/user" component={UserPage}></Route>
            <Route component={EmptyPage}></Route>
          </Switch>

        </Router>
      </div>
    )
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    )
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    )
  }
}

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>404</h3>
      </div>
    )
  }
}
