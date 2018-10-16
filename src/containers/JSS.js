import React, { Component } from 'react';
import injectSheet from 'react-jss';

class JSS extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                Hello Jss
                <hr/>

                <div className={classes.card}/>
                <div className={classes.card}/>
                <div className={classes.card}/>
                <div className={classes.card}/>
                <div className={classes.card}/>
            </div>
        );
    }
}

const styles ={
    container: {
    },
    card: {
        width: 200,
        height: 200,
        margin: 10,
        boxShadow: '1px 1px 2px 2px gray',
        transition: 'transform 0.3s',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
            transform: 'translateX(10px)',
            transition: 'transform 0.3s'
        }
    }
};

export default injectSheet(styles)(JSS);
