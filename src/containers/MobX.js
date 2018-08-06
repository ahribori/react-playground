import React, { Component } from 'react';
import { observable, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

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
const dataStore = new DataStore();

@inject('todoStore')
@observer
class MobX extends Component {

    fetch = () => {
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
                        onClick={() => counterStore.count--}>
                        -
                    </button>
                    {counterStore.computedCount}
                    <button
                        onClick={() => counterStore.count++}>
                        +
                    </button>
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