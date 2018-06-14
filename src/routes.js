import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import {
    Home,
    NewFeature,
    Calendar,
    GoogleSheet,
    Rx,
    TUIEditor,
} from './containers';


export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/new" component={NewFeature}/>
        <Route exact path="/calendar" component={Calendar}/>
        <Route exact path="/google-sheet" component={GoogleSheet}/>
        <Route exact path="/rx" component={Rx}/>
        <Route exact path="/editor" component={TUIEditor}/>
    </Switch>
);