import React, { Component, useState } from 'react';

const Counter = () => {
  const [value /* 값 */, setValue /* 값을 변화시킬 수 있는 setter */] = useState(0 /* 초기값 */);

  return (
    <div>
      <p>
        <b>{value}</b>번 누르셨습니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
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
