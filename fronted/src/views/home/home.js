/**
 * Created by nxy on 2018/5/23.
 */
import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Home extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <WingBlank>
        <WhiteSpace size="lg"/>
        <Card>
          <Card.Header
            title="标题"
            thumb="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3671407725,506460844&fm=58"
            extra={<span>标题描述</span>}
          />
          <Card.Body>
            <div>卡片内容</div>
          </Card.Body>
          <Card.Footer
            content="卡片底部"
            extra={<div>底部描述</div>}
          />
        </Card>
        <WhiteSpace size="lg"/>
      </WingBlank>
    )
  }
}

export default Home;