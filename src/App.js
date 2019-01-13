import './App.css';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import routes from './routes';
import { todoStore } from './mobx_store';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class App extends React.Component {

    renderMenu = () => (
        <ul className={'menu'}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/new'}>React 16.x new feature</Link></li>
            <li><Link to={'/calendar'}>Calendar</Link></li>
            <li><Link to={'/google-sheet'}>Google Sheet</Link></li>
            <li><Link to={'/rx'}>Rx.js</Link></li>
            <li><Link to={'/editor'}>TUIEditor</Link></li>
            <li><Link to={'/decorator'}>Decorator Test</Link></li>
            <li><Link to={'/zzalbang'}>Zzalbang</Link></li>
            <li><Link to={'/mui'}>MaterialUI</Link></li>
            <li><Link to={'/reselect'}>Reselect Example</Link></li>
            <li><Link to={'/mobx'}>MobX</Link></li>
            <li><Link to={'/videojs'}>VideoJs</Link></li>
            <li><Link to={'/react_images'}>React Images</Link></li>
            <li><Link to={'/notification_example'}>Notification Examples</Link></li>
            <li><Link to={'/jss'}>JSS</Link></li>
            <li><Link to={'/particles_example'}>Particles.js</Link></li>
            <li><Link to={'/modal_example'}>Modal</Link></li>
            <li><Link to={'/slick_example'}>Slick</Link></li>
            <li><Link to={'/formik_example'}>Formik example</Link></li>
            <li><Link to={'/react_hooks'}>React Hooks</Link></li>
            <li><Link to={'/image_crop'}>Image crop</Link></li>
            <li><Link to={'/react_dnd'}>ReactDnD</Link></li>
            <li><Link to={'/react_sortable'}>React Sortable</Link></li>
            <li><Link to={'/react_datepicker'}>React Datepicker</Link></li>
            <li><Link to={'/react_transition_group'}>React Transition Group</Link></li>
            <li><Link to={'/react_collapsible'}>React Collapsible</Link></li>
        </ul>
    );

    render() {
        return (
            <Provider
                todoStore={todoStore}
            >
                <div className={this.props.className}>
                    <DevTools/>
                    {this.renderMenu()}
                    <div className={'routes'}>
                        {routes}
                    </div>
                </div>
            </Provider>
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
    width: 100%;
    padding: 0.8rem;
  }
`;

export default withRouter(StyledApp);
