import React, { Component } from 'react';

const styles = {
    background: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
    },
    modal: {
        minWidth: 300,
        minHeight: 200,
        backgroundColor: 'white',
        padding: 16,
        boxShadow: '1px 1px 1px grey',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        backgroundColor: 'yellow',
    },
    body: {
        backgroundColor: 'orange',
        flexGrow: 1,
    },
    action: {
        backgroundColor: 'powderblue',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        margin: 4,
    }
};

class Modal extends Component {

    render() {
        return (
            <div style={styles.background}>
                <div style={styles.modal}>
                    <div style={styles.header}>
                        <h3>Header</h3>
                    </div>
                    <div style={styles.body}>
                        Body
                    </div>
                    <div style={styles.action}>
                        <button style={styles.button}>확인</button>
                        <button style={styles.button}>취소</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
