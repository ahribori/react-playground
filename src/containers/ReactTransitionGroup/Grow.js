import React from 'react';
import { Transition } from 'react-transition-group';

const createTransitionStyle = duration => ({
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
});

class Grow extends React.Component {
  static defaultProps = {
    timeout: 0,
    duration: 300,
    in: false,
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    const newState = {};
    if (prevState.in === false && nextProps.in === true) {
      newState.in = true;
      newState.show = true;
    }
    return newState;
  };

  state = {
    in: this.props.in,
    show: true,
  };

  onExited = () => {
    const { duration } = this.props;
    setTimeout(() => {
      this.setState({ in: false, show: false });
    }, duration);
  };

  render() {
    const { children, duration, timeout, in: transitionIn } = this.props;
    const { show } = this.state;
    return (
      <Transition
        in={transitionIn}
        timeout={timeout}
        appear={true}
        onExited={this.onExited}
      >
        {state => {
          if (!show) {
            return null;
          }

          return React.isValidElement(children) ? (
            React.cloneElement(children, {
              style: createTransitionStyle(duration)[state],
            })
          ) : (
            <div
              style={{
                display: 'inline-block',
                ...createTransitionStyle(duration)[state],
              }}
            >
              {children}
            </div>
          );
        }}
      </Transition>
    );
  }
}

export default Grow;
