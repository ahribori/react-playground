import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const Types = {
  ITEM: 'toy',
};
const itemSource = {
  beginDrag(props) {
    console.log('beginDrag')
    return {
      id: props.id
    }
  },
  endDrag(props) {
    console.log('endDrag')
    console.log(props)
    /* code here */
  },
  isDragging(props, monitor) {
    console.log(props, monitor)
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Toy extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props;
    return connectDragSource(
      <div style={{ border: '1px solid red', width: 50, height: 50 }}/>,
      /* code here */
    );
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(Toy);
