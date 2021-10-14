import React, { Component } from 'react';
import Layout from './Layout';

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="商城首页">
        {{
          content: (
            <div>
              <p>HomePage</p>
            </div>
          ),
          text: '文本内容',
          btnClick: () => { console.log('click btn') }
        }}
      </Layout>
    )
  }
}