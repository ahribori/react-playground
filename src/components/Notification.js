import React, { Component } from 'react';

class Notification extends Component {
    render() {
        console.log('render')
        return (
            <div style={Object.assign({}, styles.container, this.props.show && styles.show)}>
                메세지입니다~
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.show) {
            if (this.timerAutoHide) {
                clearTimeout(this.timerAutoHide);
            }
            this.timerAutoHide = setTimeout(() => {
                this.props.onClose();
            }, 2000);
        }
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        height: 30,
        color: 'white',
        backgroundColor: 'green',
        top: -30,
        left: 0,
        transition: 'transform 0.5s',
    },
    show: {
        transform: 'translateY(30px)',
    },
};

export default Notification;
