import React, { Component } from 'react';
import Notification from '../components/Notification';

class NotificationExample extends Component {
    state = {
        show: false,
    };

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        show: true,
                    });
                }}>메세지 보이기
                </button>
                <Notification
                    show={this.state.show}
                    onClose={() => {
                        this.setState({
                            show: false,
                        });
                    }}
                />
            </div>
        );
    }
}

export default NotificationExample;
