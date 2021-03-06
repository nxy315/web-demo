/**
 * Created by nxy on 2018/5/23.
 */
import React from 'react';

class Bundle extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      abc:"abc",
      mod: null
    };
  }
  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load().then((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod ? mod.default : mod
      })
    }).catch(err => console.log('Failed to load module', err));
  }

  render() {
    if (!this.state.mod) return false;
    return this.props.children(this.state.mod, this.props);
  }
}


export default function getComponent(props, ComponentFunc) {
  return (
    <Bundle load={ComponentFunc} {...props}>
      {(Module, props) => <Module {...props}/>}
    </Bundle>
  )
}