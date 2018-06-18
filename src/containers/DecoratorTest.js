import React from 'react';

const withHello = (ComposedComponent) => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                pending: true,
            }
        }

        hello = () => {
            console.log('hello!');
        };

        render() {
            return <ComposedComponent {...this.props} hello={this.hello} />
        }
    }
};

@withHello
class DecoratorTest extends React.Component {
    componentDidMount() {
        this.props.hello();
    }

  render() {
    return (
        <div>Decorator</div>
    )
  }
}

export default DecoratorTest;
