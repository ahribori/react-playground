import { combineReducers, createStore } from 'redux';

import example from './Example';
import modal from './Modal';

const appReducer = combineReducers({
    example,
    modal,
});

const rootReducer = (state, action) => {
    if (action.type === 'auth/LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};

export function initializeStore(initialState) {
    return createStore(rootReducer, initialState);
}
