import React, { Component } from 'react';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  margin: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

class Card extends Component {

  render() {
    const { card, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    return (
      <div style={{ ...style, opacity }}>
        {card.text}
      </div>
    );
  }
}

export default Card;
