import { combineReducers, createStore } from 'redux';

import example from './Example';

const appReducer = combineReducers({
    example,
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