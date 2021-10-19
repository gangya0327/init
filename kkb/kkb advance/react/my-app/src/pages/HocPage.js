import React, { Component } from 'react'

const foo = (Cmp) => props => {
  return (
    <div className="border">
      <Cmp {...props} omg="omg"></Cmp>
    </div>
  )
}

function Child(props) {
  return <div>Child</div>
}

const Foo = foo(foo(Child))

@foo
class ClassChild extends Component {
  render() {
    return <div>ClassChild</div>
  }
}

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo />
        <ClassChild />
      </div>
    )
  }
}
