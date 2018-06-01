import React from 'react';

class NewLifecycleExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', nextProps, prevState);
    console.log(nextProps, prevState)
    return {message: "state updated"};
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    console.log(prevProps, prevState)
    return 3;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`snapshot ${snapshot}`);
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.state)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    })
  };

  render() {
    console.log('render');
    return (
        <div>
          <h3>New Lifecycle Examples</h3>
          <input type="text" onChange={this.handleChange}/>
          <p>{this.state.message}</p>
        </div>
    );
  }
}

export default NewLifecycleExamples;
