/**
 * Created by nxy on 2018/5/23.
 */
import React from 'react'
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ListComponent extends React.Component{
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <List renderHeader={() => '列表标题'}>
        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          列表n<Brief>一些描述</Brief>
        </Item>
      </List>
    )
  }
}

export default ListComponent;