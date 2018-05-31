import React from 'react';
import styled, { css } from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

class MyStyledComponent extends React.Component {
  render() {
    return (
        <div>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
        </div>
    )
  }
}

export default MyStyledComponent;
