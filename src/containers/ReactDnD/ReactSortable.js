import React, { Component } from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';

const styles = {
  ul: {
    padding: 0,
  },
  li: {
    height: 30,
    boxShadow: '1px 1px 1px gray',
    margin: 15,
    padding: 15,
    listStyleType: 'none',
    backgroundColor: 'white',
    cursor: 'row-resize'
  }
};

const SortableItem = SortableElement(({ value }) => <li style={styles.li}>{value}</li>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul style={styles.ul}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class ReactSortable extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList
      items={this.state.items}
      onSortEnd={this.onSortEnd}
      transitionDuration={200}
    />;
  }
}

export default ReactSortable;
