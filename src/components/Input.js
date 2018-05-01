import React from 'react';

/**
 * New Ref API
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.inputRef = React.createRef();
    }

    componentDidMount() {
       this.inputRef.current.focus();
    }

    render() {
        return <input type="text" ref={this.inputRef} />
    }
}

export default Input;
