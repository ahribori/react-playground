import { connect } from 'react-redux';

export const InjectStore = (storeNames = [], mapDispatchToProps) => WrappedComponent => {
    if (!Array.isArray(storeNames)) {
        throw new Error('stateNames must be an array');
    }
    const mapStateToProps = state => {
        const map = {};
        for (let i = 0, length = storeNames.length; i < length; i++) {
            map[storeNames[i]] = state[storeNames[i]];
        }
        return map;
    };

    return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};
