import React, { Component } from 'react';
import update from 'immutability-helper';
import { DropTarget } from 'react-dnd';
import Card from './Card';

const dropTargetSpec = {
  drop(props, monitor, component) {
    const { id } = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card);
    return {
      listId: id,
    };
  },
};

const dropTargetCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
});

@DropTarget('CARD', dropTargetSpec, dropTargetCollect)
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: props.list };
  }

  pushCard = card => {
    this.setState(
      update(this.state, {
        cards: {
          $push: [card],
        },
      }),
    );
  };

  removeCard = index => {
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1]],
        },
      }),
    );
  };

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    );
  };

  render() {
    const { cards } = this.state;
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    const style = {
      width: '200px',
      height: '404px',
      border: '1px dashed gray',
    };

    const backgroundColor = isActive ? 'lightgreen' : '#FFF';

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {cards.map((card, i) => {
          return (
            <Card
              key={card.id}
              index={i}
              listId={this.props.id}
              card={card}
              removeCard={this.removeCard}
              moveCard={this.moveCard}
            />
          );
        })}
      </div>,
    );
  }
}

export default Container;
