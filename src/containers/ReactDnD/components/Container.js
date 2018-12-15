import React, { Component } from 'react';
import Card from './Card';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: props.list };
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        {cards.map((card, i) => {
          return (
            <Card key={card.id} index={i} listId={this.props.id} card={card} />
          );
        })}
      </div>
    );
  }
}

export default Container;
