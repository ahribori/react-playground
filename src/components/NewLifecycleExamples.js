import React from 'react';

class NewLifecycleExamples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    static getDerivedStateFromProps(a) {
        console.log('getDerivedStateFromProps', a);
        return a;
    }

    getSnapshotBeforeUpdate(b) {
        console.log('getSnapshotBeforeUpdate', b);
        return b
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount');
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
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default NewLifecycleExamples;
