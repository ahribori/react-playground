import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const Types = {
  ITEM: 'toy',
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

class Box extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div style={{ border: '1px solid black', height: 500}}/>
    );
    /* code here */
  }
}
export default DropTarget(Types.ITEM, {
  drop(props, monitor, component) {
    console.log('drop')
  },
  hover(props, monitor, component) {
    console.log('hover')
  },
}, collect)(Box);
