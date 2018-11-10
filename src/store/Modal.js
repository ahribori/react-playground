import update from 'immutability-helper';

// ACTION TYPES
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';

// ACTIONS
export const open = (options) => {
    return {
        type: MODAL_OPEN,
        options,
    };
};

export const close = () => {
    return {
        type: MODAL_CLOSE,
    };
};

// INITIAL STATE
const initialState = {
    show: false,
    options: {
        header: '',
        body: '',
        onOpen: () => {},
        onClose: () => {},
        onConfirm: () => {},
        onCancel: () => {},
    },
};

// REDUCERS
export default (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN: {
            return update(state, {
                show: { $set: true },
                options: { $set: action.options },
            });
        }
        case MODAL_CLOSE: {
            return update(state, {
                show: { $set: false },
            });
        }
        default:
            return state;
    }
};
