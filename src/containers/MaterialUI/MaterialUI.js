import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from './components/AppBar';

const style = {
    root: {},
};

@withStyles(style)
class MaterialUI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar/>
            </div>
        );
    }

}

export default MaterialUI;
