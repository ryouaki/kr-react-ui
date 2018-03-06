import React from 'react';

import Layout from './../../../components/Layout';

export default class Menu extends React.Component {
  render() {
    return <Layout.Row direction="col">
      <Layout.Col flex="growAndShrink">
        11
      </Layout.Col>
      <Layout.Col flex="fixed" width={260}>
        11
      </Layout.Col>
    </Layout.Row>
  }
}