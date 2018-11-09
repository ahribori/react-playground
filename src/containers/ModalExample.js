import React, { Component } from 'react';
import Modal from '../components/Modal';

class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.modal = React.createRef();
    }
    render() {
        return (
            <div>
                <Modal ref={this.modal}/>
            </div>
        );
    }

    componentDidMount() {
        const { current: modal } = this.modal;
        modal.open({
            head: '제목',
            body: '내용',
            onConfirm: () => {
                console.log('confirm');
            },
            onCancel: () => {
                console.log('cancel');
            }
        })
    }
}

export default ModalExample;
