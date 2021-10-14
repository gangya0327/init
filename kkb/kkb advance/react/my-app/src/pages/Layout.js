import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

export default class Layout extends Component {
  componentDidMount() {
    const { title = '首页' } = this.props
    document.title = title
  }
  render() {
    const { children, showTopBar, showBottomBar } = this.props
    console.log(children)
    return (
      <div>
        {showTopBar && <TopBar />}
        {children.content}
        {children.text}
        <button onClick={children.btnClick}>btnClick</button>
        {showBottomBar && <BottomBar />}
      </div>
    )
  }
}