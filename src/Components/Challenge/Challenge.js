import React, { Component } from 'react';
import Modal from '../Modal/Modal';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: false,
         };
    }

    openModal = () =>{
        this.setState({ isOpen : true });
    }
    closeModal = () =>{
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>Show Modal</button>
                <Modal
                    isOpen={this.state.isOpen}
                    onClose={this.closeModal}
                >
                    <h3>Modal Content</h3>
                </Modal>
            </div>
        );
    }
}

export default Challenge;