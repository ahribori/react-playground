import update from 'immutability-helper';

// ACTION TYPES
const SET_MESSAGE = 'SET_MESSAGE';
const ADD_NUMBER = 'ADD_NUMBER';
const ADD_NUMBER_LIST = 'ADD_NUMBER_LIST';

// ACTIONS
export const setMessage = (message) => {
    return {
        type: SET_MESSAGE,
        message,
    };
};

export const addNumber = () => {
    return {
        type: ADD_NUMBER,
    };
};

export const addNumberList = () => {
    return {
        type: ADD_NUMBER_LIST,
    };
};

// INITIAL STATE
const initialState = {
    message: '',
    number: 0,
    numberList: [],
};

// REDUCERS
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE: {
            return update(state, {
                message: {
                    $set: action.message,
                },
            });
        }
        case ADD_NUMBER: {
            return update(state, {
                number: {
                    $set: state.number + 1,
                },
            });
        }
        case ADD_NUMBER_LIST: {
            return update(state, {
                numberList: {
                    $push: [{
                        number: state.numberList.length + 1,
                    }],
                },
            });
        }
        default:
            return state;
    }
};