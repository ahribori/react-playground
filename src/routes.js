import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import {
    Home,
    NewFeature,
    Calendar,
} from './containers';


export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/new" component={NewFeature}/>
        <Route exact path="/calendar" component={Calendar}/>
    </Switch>
);