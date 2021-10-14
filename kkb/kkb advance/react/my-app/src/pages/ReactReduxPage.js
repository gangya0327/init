import React, { Component } from 'react'
import { connect } from 'react-redux'

export default connect(
  // mapStateToProps把state映射到props上
  state => ({ num: state }),
  // mapDispatchToProps把dispatch映射到props上
  {
    add: () => ({ type: 'ADD' })
  }
)(class ReactReduxPage extends Component {
  render() {
    console.log(`props`, this.props)
    const { num, dispatch, add } = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={() => dispatch({ type: 'ADD' })}>add</button>
        <button onClick={add}>add</button>
      </div>
    )
  }
})
