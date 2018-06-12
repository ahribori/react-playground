import './App.css';
import React from 'react';
import {
    withRouter,
    Link,
} from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';

class App extends React.Component {

    renderMenu = () => (
        <ul className={'menu'}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/new'}>React 16.x new feature</Link></li>
            <li><Link to={'/calendar'}>Calendar</Link></li>
            <li><Link to={'/google-sheet'}>Google Sheet</Link></li>
            <li><Link to={'/rx'}>Rx.js</Link></li>
        </ul>
    );

    render() {
        return (
            <div className={this.props.className}>
                {this.renderMenu()}
                <div className={'routes'}>
                    {routes}
                </div>
            </div>
        );
    }
}

const StyledApp = styled(App)`
  box-sizing: border-box;
  display: flex;
  & .menu {
    border-right: 1px dashed gray;
    flex-shrink: 0;
    flex-basis: 200px;
  }
  & .routes {
    padding: 0.8rem;
  }
`;

export default withRouter(StyledApp);