import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext, DragSource, DropTarget, DragLayer } from 'react-dnd';

const typeCard = '@@Type::Card';

const containerStyle = {};

const cardStyle = {
  margin: 5,
  height: 50,
};

const Card = props => {
  const style = props.isDragging
    ? Object.assign({}, cardStyle, {
        backgroundColor: props.color,
        opacity: 0.5,
      })
    : Object.assign({}, cardStyle, { backgroundColor: props.color });

  return props.connectDropTarget(
    <article style={containerStyle}>
      {props.connectDragSource(
        <div style={style}>
          <div className="card-body">
            <h5>{props.title}</h5>
          </div>
        </div>,
      )}
    </article>,
  );
};

const CustomDragLayer = ({ item, itemType, isDragging, ...props }) => {
  const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  };

  function getItemStyles(props) {
    const { currentOffset } = props;
    if (!currentOffset) {
      return {
        display: 'none',
      };
    }

    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform: transform,
      WebkitTransform: transform,
    };
  }

  if (!isDragging) {
    return null;
  }

  function renderItem(type, item) {
    switch (type) {
      case typeCard:
        return <div>프리뷰!</div>;
    }
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(props)}>{renderItem(itemType, item)}</div>
    </div>
  );
};

const specTarget = {
  drop(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
  hover(props, monitor, component) {},
};

const specSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    const source = monitor.getItem();
    const target = monitor.getDropResult();

    if (source.id === target.id) {
      return;
    }
    props.moveCard(source.id, target.index);
  },
};

const collectTarget = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

const collectSource = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const collectLayer = monitor => {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
};

const CustomDragLayerWithDnD = DragLayer(collectLayer)(CustomDragLayer);

const CardWithDnD = DropTarget(typeCard, specTarget, collectTarget)(
  DragSource(typeCard, specSource, collectSource)(Card),
);

class ReactSortable extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: '#1 장보기',
        color: '#c6c1ff',
      },
      {
        id: 2,
        title: '#2 코딩하기',
        color: '#aaf7ff',
      },
      {
        id: 3,
        title: '#3 요리하기',
        color: '#ffe2cf',
      },
      {
        id: 4,
        title: '#4 청소하기',
        color: '#f6ffcb',
      },
      {
        id: 5,
        title: '#5 빨래하기',
        color: '#d7ffcf',
      },
    ],
  };

  moveCard = (id, index) => {
    const { cards } = this.state;
    const sourceCard = cards.find(card => card.id === id);
    const sortCards = cards.filter(card => card.id !== id);

    sortCards.splice(index, 0, sourceCard);
    this.setState({ cards: sortCards });
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        {cards.map((card, i) => {
          const { id } = card;
          return (
            <CardWithDnD
              key={id}
              index={i}
              moveCard={this.moveCard}
              {...card}
            />
          );
        })}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ReactSortable);
