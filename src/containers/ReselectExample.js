import React from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { setMessage, addNumber, addNumberList } from '../store/Example';

class ReselectExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (e) => {
        this.props.setMessage(e.target.value);
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.props.message}/>
                <h1>{this.props.number}</h1><button onClick={this.props.addNumber}>Add Number</button>
                <ul>
                    {
                        this.props.numberList &&
                        this.props.numberList.map(item => {
                            return <li key={item.number}>{item.number}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.props.addNumberList();
    }
}

const numberListSelector = state => {
    return state.example.numberList
};

const computedNumberListSelector = createSelector(
    // 마지막 인자를 제외한 인자의 함수들은 Input Selector
    numberListSelector,

    // 마지막 인자의 함수는 Result Selector
    numberList => {
        return numberList.map(item => {
            console.log('computedNumberListSelector');
            return { number: item.number - 1 };
        });
    },
);

const computedNumberSelector = createSelector(
    state => state.example.number,
    number => {
        console.log('computedNumberSelector');
        return number * number;
    },
);

export default connect(
    state => {
        return {
            message: state.example.message,
            number: computedNumberSelector(state),
            numberList: computedNumberListSelector(state),
        };
    },
    dispatch => {
        return {
            setMessage: (message) => dispatch(setMessage(message)),
            addNumber: () => dispatch(addNumber()),
            addNumberList: () => dispatch(addNumberList()),
        };
    },
)(ReselectExample);