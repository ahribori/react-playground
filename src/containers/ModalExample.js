import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import ReduxModal from '../components/ReduxModal';
import { open } from '../store/Modal';

@connect(state => state.modal)
class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.modal = React.createRef();
    }

    openStateModal = () => {
        const { current: modal } = this.modal;
        modal.open({
            head: '제목',
            body: '내용',
            onConfirm: () => {
                console.log('confirm');
            },
            onCancel: () => {
                console.log('cancel');
            },
        })
    };

    openReduxModal = () => {
        const { dispatch } = this.props;
        dispatch(open({
            header: 'Redux Modal Header',
            body: 'redux modal body',
            onConfirm: () => { console.log('confirm') },
            onCancel: () => { console.log('cancel')},
        }))
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.openStateModal}>State를 가지고있는 모달 열기</button>
                </div>
                <div>
                    <button onClick={this.openReduxModal}>Redux 모달 열기</button>
                </div>
                <Modal ref={this.modal}/>
                <ReduxModal/>
            </div>
        );
    }
}

export default ModalExample;
