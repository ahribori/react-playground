import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class CounterStore {
    @observable count = 0;
}

const store = new CounterStore();

@observer
class MobX extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={() => store.count--}>
                    -
                </button>
                {store.count}
                <button
                    onClick={() => store.count++}>
                    +
                </button>
            </div>
        );
    }
}

export default MobX;