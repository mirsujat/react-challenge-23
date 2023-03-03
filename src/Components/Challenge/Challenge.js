import React, { Component } from 'react';
import Modal from '../Modal/Modal';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
         }
    }

    openModal = () =>{
        this.setState({  isOpen: true });
    }
    closeModal = () =>{
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal} className='focusAfterClose' >show modal</button>
                <Modal
                    id='dialog1'
                    isOpen={this.state.isOpen}
                    onClose={this.closeModal}
                    label='Modal Title'
                    focusAfterClose='focusAfterClose'
                >
                    <h4>Modal ContentArea</h4>
                    <input type="text" />
                </Modal>
            </div>
        );
    }
}

export default Challenge;