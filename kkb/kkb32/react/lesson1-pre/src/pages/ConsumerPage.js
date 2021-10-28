import React, { Component } from 'react'
import { Context, UserContext } from '../Context'

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
          {
            theme => {
              return (<div>
                <h3 style={{ color: theme.themeColor }}>ConsumerPage</h3>
                <UserContext.Consumer>
                  {
                    user => <p>{user.name}</p>
                  }
                </UserContext.Consumer>
              </div>)
            }
          }
        </Context.Consumer>
      </div>
    )
  }
}
