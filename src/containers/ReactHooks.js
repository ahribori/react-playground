import React, { Component, useState, useEffect } from 'react';

const Counter = () => {
  const [
    counter /* 값 */,
    setCounter /* 값을 변화시킬 수 있는 setter */,
  ] = useState(0 /* 초기값 */);
  const [name, setName] = useState('Daniel');

  const asyncTask = async () => {
    await new Promise(resolve => {
      setTimeout(() => {
        console.log('resolve');
        resolve();
      }, 1000);
    });
  };

  useEffect(
    () => {
      console.log('counter가 변경 됨', counter);
    },
    [counter],
  );

  useEffect(
    () => {
      console.log('name이 변경됨', name);
      asyncTask();
    },
    [name],
  );

  useEffect(
    () => {
      console.log('kkk');
    },
    [], // watch 할 게 없으면 최초 한 번만 실행됨
  );

  return (
    <div>
      <p>
        <b>{counter}</b>번 누르셨습니다.
      </p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};

class ReactHooks extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default ReactHooks;
