import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  display: 'inline-block',
  width: 100,
  height: 100,
  margin: 10,
  boxShadow: '1px 1px 1px gray',
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'scale(0.5)',
    transition: `all ${duration}ms ease-in-out`,
  },
  entered: {
    opacity: 1,
    transform: 'scale(1)',
    transition: `all ${duration}ms ease-in-out`,
  },
  exiting: {
    opacity: 0,
    transform: 'scale(0.5)',
    transition: `all ${duration}ms ease-in-out`,
  },
  exited: {
    opacity: 0,
    transform: 'scale(0)',
    transition: `all ${duration}ms ease-in-out`,
  },
};

const Card = ({ index }) => {
  return (
    <Transition in={true} appear={true} timeout={index * 100}>
      {state => {
        return (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            Hello, World!
          </div>
        );
      }}
    </Transition>
  );
};

class ReactTransitionGroup extends Component {

  render() {
    return (
      <div>
        {Array.from(Array(10)).map((node, index) => {
          return <Card key={`card_${index}`} index={index} />;
        })}
      </div>
    );
  }
}

export default ReactTransitionGroup;
