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
    state = {
        show: false,
        header: 'Header',
        body: 'Body',
        onConfirm: null,
        onCancel: null,
    };

    open = (options) => {
        this.setState({
            show: true,
            header: options.header || 'Header',
            body: options.body || 'Body',
            onConfirm: options.onConfirm || (() => {}),
            onCancel: options.onCancel || (() => {}),
        })
    };

    confirm = () => {
        const { onConfirm } = this.state;

        this.setState({
            show: false,
        });
        onConfirm();
    };

    cancel = () => {
        const { onCancel } = this.state;

        this.setState({
            show: false,
        });
        onCancel();
    };

    render() {
        const {
            header,
            body,
        } = this.state;

        const {
            show
        } = this.state;

        if (!show) {
            return null;
        }

        return (
            <div style={styles.background}>
                <div style={styles.modal}>
                    <div style={styles.header}>
                        <h3>{header}</h3>
                    </div>
                    <div style={styles.body}>
                        {body}
                    </div>
                    <div style={styles.action}>
                        <button style={styles.button} onClick={this.confirm}>확인</button>
                        <button style={styles.button} onClick={this.cancel}>취소</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
