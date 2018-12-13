import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Toy from '../components/ReactDnD/Toy';

class ReactDnD extends Component {
  render() {
    return (
      <div>
        <Toy id={12} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ReactDnD);
