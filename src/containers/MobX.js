import React, { Component } from 'react';
import { computed, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { createViewModel } from 'mobx-utils';
import { InjectStore } from '../components/ReduxInjector';

let renderCount = 0;

class CounterStore {
    @observable count = 0;

    @computed get computedCount() {
        return `카운트: ${this.count}`;
    }
}

class DataStore {
    @observable arr = [];
    @observable obj = {
        hello: 'world',
        a: {
            b: {
                c: 'foo',
                d: 'bar',
            },
        },
    };
}

const counterStore = new CounterStore();
const counterViewModel = createViewModel(counterStore);
const dataStore = new DataStore();


const mapDispatchToProps = dispatch => {
    return {
        testFunction: () => dispatch(()=>{})
    }
};

@InjectStore(['example'], mapDispatchToProps)
@inject('todoStore')
@observer
class MobX extends Component {

    fetch = () => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        console.log(possible[Math.floor(Math.random() * possible.length)])
        setTimeout(() => {
            dataStore.arr.push(possible[Math.floor(Math.random() * possible.length)]);
        }, 1000);
    };

    mutateObject = () => {
        dataStore.obj.a.b.c = 'world';
    };

    render() {
        renderCount++;
        return (
            <div>
                <h1>렌더링 횟수: {renderCount}</h1>
                <div>
                    <h3>Counter</h3>
                    <button
                        onClick={() => counterViewModel.count--}>
                        -
                    </button>
                    {counterViewModel.computedCount}
                    <button
                        onClick={() => counterViewModel.count++}>
                        +
                    </button>
                    <p>
                        counter vm isDirty: {counterViewModel.isDirty.toString()}
                    </p>
                </div>
                <div>
                    <h3>Async</h3>
                    <p>{dataStore.arr}</p>
                    <button onClick={this.fetch}>Fetch data async</button>
                </div>
                <div>
                    <h3>Observe Object</h3>
                    <pre><code>{JSON.stringify(dataStore.obj, null, 2)}</code></pre>
                    <button onClick={this.mutateObject}>Mutate object</button>
                </div>
                <div>
                    <h3>TODO Store</h3>
                    <div>
                        size: {this.props.todoStore.size}
                    </div>
                    <button onClick={() => {
                        this.props.todoStore.addTodo('ㅋㅋㅋ');
                    }}>Add Todo
                    </button>
                </div>
            </div>
        );
    }
}


export default MobX;
